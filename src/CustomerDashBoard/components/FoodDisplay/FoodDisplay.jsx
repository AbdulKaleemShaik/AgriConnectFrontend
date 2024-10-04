import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../../Context/StoreContext";
import { useEffect } from "react";
import axiosInstance from "../../../Service/AxiosInstant";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list_data, setFoodListData } = useContext(StoreContext);
  //console.log(category);
  // console.log(food_list_data);
  useEffect(() => {

    axiosInstance.get('/allproducts').then((response) => {
      setFoodListData(response.data);
    });
  }, []);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Fresh groceries near you</h2>
      <div className="food-display-list">
        {food_list_data && food_list_data.map((item, index) => {
          if (category === "All" || category === item.category) {
            // console.log(item.id);
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
