// // import React, { useContext } from "react";
// // import "./FoodItem.css";
// // import { assets } from "../../../assets/assets";

// // import { StoreContext } from "../../../Context/StoreContext";

// // const FoodItem = ({ id, name, price, description, image }) => {
// //   const { cartItems, addToCart, removeFromCart, url } =
// //     useContext(StoreContext);
// //   // console.log(id);

// //   return (
// //     <div className="food-iteam">
// //       <div className="food-item-image-container">
// //         <img
// //           className="food-item-image"
// //           src={image}
// //           alt=""

// //         />
// //         {!cartItems[id] ? (
// //           <img
// //             className="add"
// //             onClick={() => addToCart(id)}
// //             src={assets.add_icon_white}
// //             alt=""
// //           />
// //         ) : (
// //           <div className="food-item-counter">
// //             <img
// //               onClick={() => removeFromCart(id)}
// //               src={assets.remove_icon_red}
// //               alt=""
// //             />
// //             <p>{cartItems[id]}</p>
// //             <img
// //               onClick={() => addToCart(id)}
// //               src={assets.add_icon_green}
// //               alt=""
// //             />
// //           </div>
// //         )}
// //       </div>
// //       <div className="food-iteam-info">
// //         <div className="food-item-name-rating">
// //           <p>{name}</p>
// //           <img src={assets.rating_starts} alt="" />
// //         </div>
// //         <p className="food-item-desc">{description}</p>
// //         <p className="food-item-price">${price}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FoodItem;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "./FoodItem.css";
// import { assets } from "../../../assets/assets";
// import { StoreContext } from "../../../Context/StoreContext";
// import { useUser } from "../../../Context/UserContext";

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

//   const { userDetails } = useUser();

//   return (
//     <div className="food-item">
//       <div className="food-item-image-container">
//         <Link to={`/customerdashboard/product/${id}`}>
//           <img className="food-item-image" src={image} alt="" />
//         </Link>
//         {!cartItems[id] ? (
//           <img
//             className="add"
//             onClick={() => addToCart(id, userDetails.id)}
//             src={assets.add_icon_white}
//             alt=""
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={() => removeFromCart(id)}
//               src={assets.remove_icon_red}
//               alt=""
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_green}
//               alt=""
//             />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./FoodItem.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../Context/StoreContext";
import { useUser } from "../../../Context/UserContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const { userDetails } = useUser();
  const itemInCart = cartItems.find(cartItem => cartItem.id === id);
  // console.log(id);
  // console.log(userDetails);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <Link to={`/customerdashboard/product/${id}`}>
          <img className="food-item-image" src={image} alt="" />
        </Link>

        {!itemInCart ? (
          <img
            className="add"
            onClick={() => addToCart(id, userDetails.id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id, userDetails.id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemInCart.quantity}</p> {/* Render quantity, not the object */}
            <img
              onClick={() => addToCart(id, userDetails.id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
