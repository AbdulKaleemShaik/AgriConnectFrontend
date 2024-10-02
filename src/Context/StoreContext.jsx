import axios from "axios";
import { food_list } from "../assets/assets";
import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../Service/UserService";
import axiosInstance from "../Service/AxiosInstant";
import { useUser } from "./UserContext";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list_data, setFoodListData] = useState([]);
    const { userDetails } = useUser() || {};
    const addToCart = async (itemId, userId) => {
        console.log("came to add");
        try {
            const response = await axiosInstance.post(`http://localhost:8080/user/addCart?pid=${itemId}&uid=${userId}`);
        } catch (error) {
            console.log("error while adding");
        }
        const item = food_list_data.find(i => i.id === itemId);
        const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
        if (!existingItem) {
            setCartItems((prevItems) => [
                ...prevItems,
                {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                    totalPrice: item.price
                }
            ]);
        } else {
            setCartItems((prevItems) =>
                prevItems.map(cartItem =>
                    cartItem.id === itemId
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                            totalPrice: (cartItem.quantity + 1) * item.price
                        }
                        : cartItem
                )
            );
        }
        loadCartData();
    };

    const removeFromCart = async (itemId, userId) => {
        try {
            const response = await axiosInstance.post(`http://localhost:8080/user/removeCart?pid=${itemId}&uid=${userId}`);
        } catch (error) {
            console.log("error while adding");
        }
        setCartItems((prevItems) =>
            prevItems
                .map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item)
                .filter(item => item.quantity > 0)
        );

    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        cartItems.forEach((item) => {
            if (item.quantity > 0) {
                totalAmount += item.totalPrice * item.quantity;
            }
        });
        return totalAmount;
    };


    const featchFoodList = async () => {
        const response = await fetchProducts();
        //  console.log(response);

        setFoodListData(response)

    };
    const loadCartData = async () => {
        const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/user/cart`);
        const res = response.data;

        const cartSummary = res && res.map((item) => ({
            id: item.product.id,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
            title: item.product.title,
            image: item.product.image
        }));
        setCartItems(cartSummary || []);
    };


    useEffect(() => {
        loadCartData();
    }, []);
    useEffect(() => {
        async function loadData() {
            await featchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [userDetails]);

    const contextValue = {
        food_list_data,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        loadCartData,
        featchFoodList,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
