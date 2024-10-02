// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../../../Service/AxiosInstant";

// const ProductDetails = () => {
//     const { id } = useParams(); // get the product id from the URL
//     const [product, setProduct] = useState(null);
//     useEffect(() => {
//         axiosInstance.get(`/product/${id}`).then((res) => {
//             setProduct(res.data)

//         })
//             .catch((err) => {
//                 console.log(err);

//             })
//     }, [id]);

//     if (!product) {
//         return <p>Loading product details...</p>;
//     }

//     return (
//         <div>
//             <h1>{product.name}</h1>
//             <img src={`${import.meta.env.VITE_API_URL}/img/product_img/${product.image}`} alt={product.name} />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             {/* Add more details as needed */}
//         </div>
//     );
// };

// export default ProductDetails;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axiosInstance from "../../../Service/AxiosInstant";
// import styles from "./ProductDetails.module.css"; // Custom styles for layout

// const ProductDetails = () => {
//     const { id } = useParams(); // Get product id from URL
//     const [product, setProduct] = useState(null);
//     const [quantity, setQuantity] = useState(1); // For handling quantity
//     const navigate = useNavigate();

//     // Fetch product details by id
//     useEffect(() => {
//         axiosInstance
//             .get(`/product/${id}`)
//             .then((res) => {
//                 setProduct(res.data);
//             })
//             .catch((err) => {
//                 console.error("Error fetching product details:", err);
//             });
//     }, [id]);

//     // Handle adding product to cart
//     const handleAddToCart = () => {
//         const cartItem = {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity,
//         };

//         // Store cart in local storage (for demonstration purposes)
//         const cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const updatedCart = [...cart, cartItem];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));

//         navigate("/cart"); // Redirect to cart page
//     };

//     // If product is not loaded yet
//     if (!product) {
//         return <p>Loading product details...</p>;
//     }

//     return (
//         <div className={styles.product_details_container}>
//             <div className={styles.product_info}>
//                 <img
//                     src={`${import.meta.env.VITE_API_URL}/img/product_img/${product.image}`}
//                     alt={product.name}
//                     className={styles.product_image}
//                 />
//                 <div className={styles.product_description}>
//                     <h1>{product.name}</h1>
//                     <p>{product.description}</p>
//                     <p className={styles.price}>Price: ${product.price}</p>
//                     <div className={styles.quantity_selector}>
//                         <label htmlFor="quantity">Quantity: </label>
//                         <input
//                             type="number"
//                             id="quantity"
//                             value={quantity}
//                             min="1"
//                             onChange={(e) => setQuantity(e.target.value)}
//                         />
//                     </div>
//                     <button className={styles.add_to_cart_btn} onClick={handleAddToCart}>
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//             <div className={styles.additional_info}>
//                 <h2>Product Details</h2>
//                 <ul>
//                     <li>Category: {product.category}</li>
//                     <li>Stock: {product.stock}</li>
//                     <li>Discount: {product.discount ? `${product.discount}%` : "None"}</li>
//                 </ul>
//                 {/* Display reviews, ratings, related products */}
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../../Service/AxiosInstant";
import styles from "./ProductDetails.module.css";
import { StoreContext } from "../../../Context/StoreContext"; // Import StoreContext
import Navbar from "../Navbar/Navbar";
import CustomerNav from "../../../CustomerComponents/Authentication/CustomerNav";
import { useUser } from "../../../Context/UserContext";


const ProductDetails = () => {
    const { id } = useParams(); // Get product id from URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // For handling quantity
    const { addToCart } = useContext(StoreContext); // Use addToCart from StoreContext
    const navigate = useNavigate();
    const { userDetails } = useUser();

    

    // Fetch product details by id
    useEffect(() => {
        axiosInstance
            .get(`/product/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error("Error fetching product details:", err);
            });
    }, [id]);

    // Handle adding product to cart using StoreContext
    const handleAddToCart = () => {
        if (product) {
            addToCart(product.id, userDetails.id); // Add product to cart with quantity
        }
        //navigate("/customerdashboard"); // Redirect to cart page
    };

    // If product is not loaded yet
    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <>
            {/* <Navbar /> */}
            <CustomerNav />
            <div className={styles.product_details_container}>
                <div className={styles.product_info}>
                    <img
                        src={`${import.meta.env.VITE_API_URL}/img/product_img/${product.image}`}
                        alt={product.name}
                        className={styles.product_image}
                    />
                    <div className={styles.product_description}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p className={styles.price}>Price: ${product.price}</p>
                        {/* <div className={styles.quantity_selector}>
                        <label htmlFor="quantity">Quantity: </label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div> */}
                        <button className={styles.add_to_cart_btn} onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className={styles.additional_info}>
                    <h2>Product Details</h2>
                    <ul>
                        <li>Category: {product.category}</li>
                        <li>Stock: {product.stock}</li>
                        <li>Discount: {product.discount ? `${product.discount}%` : "None"}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;

