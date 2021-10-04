import React,{useState,useEffect, useCallback } from 'react'
// import {Link} from "react-router-dom";
// import { useSpring, animated } from 'react-spring';
import Axios from "axios";
import {Modal} from "../CustomComponents/Modal.jsx"
import  "../AddtoCart/AddtoCart.css";
// import "../CustomComponents/Modal.css"





function CustomerDish({dish}) {


  const[myDish,setMyDish]=useState([]);

 const[cart,setCart]=useState([]);
 // const[page,setPage]=useState(PAGE_DISHES)
 const customerName = JSON.parse(localStorage["user"])[0].name;
 const customerEmail=JSON.parse(localStorage["user"])[0].email_id;
 const dishName=dish.dish_name;
 const restaurantName=dish.res_name;
 const price=dish.dish_price;
 const dishCategory=dish.dish_category;
  const addToCart = (dish) => {
    console.log(dish);
    setCart([...cart,dish]);
    Axios.post("http://localhost:3001/AddtoCart",{
      customerName:customerName,
      customerEmail:customerEmail,
      dishName:dishName,
      restaurantName:restaurantName,
      price:price,
      dishCategory:dishCategory
    })
      alert("Items added to shopping Cart")
 };

    // Axios.post("http://localhost:3001/AddtoCart",{
    //   customerName:JSON.parse(localStorage.getItem(user[0].name)),
    //   customerEmail:JSON.parse(localStorage.getItem(user[0].email_id)),
    //   restaurantName:JSON.parse(localStorage.getItem(res.restaurantName)),
    //   dish_name:JSON.parse(localStorage.getItem(myDish.dish_name)),
    //   dish_price:JSON.parse(localStorage.getItem(myDish.dish_name)),
    //   dish_category:JSON.parse(localStorage.getItem(myDish.dish_name))
    // }).then((response)=>{

  // const renderCart = () => (
  //   <>
  //   <h1>Cart</h1>
  //   <div className="Dishes"></div>
  //   {cart.map((Dishes,idx) => {
  //     <div className="Dish" key={idx}>
  //     <h3>{dish.name}</h3>
  //     <h4>{dish.cost}</h4>
  //     <img src={`data:image/jpeg;base64,${dish.dish_img}`} alt="cart-img" />
  //     <button type="button" onClick={()=>removeFromCart(dish)}>Remove</button>
  //     </div>
  //   })}
  // </>
// )

  return(

    <div className="card dishes" style={{width: "300px"}}>
      <>
    <img src={`data:image/jpeg;base64,${dish.dish_img}`} className="card-img-top" alt="dish-img" />
    <div className="card-body">
      <h5 className="card-title">{`${dish.dish_name}`}</h5>
      <h5 className="card-text">{`${dish.dish_ingredients}`}</h5>
      <h5 className="card-text">{`${dish.dish_price}`}</h5>
      <h5 className="card-text">{`${dish.dish_description}`}</h5>
      <h5 className="card-text">{`${dish.dish_category}`}</h5>
      <div className="text-center">
      <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={()=>{addToCart(dish)}}>Add to Cart</button>
      </div>
      </div>
      </>

      </div>
  );
}



export default CustomerDish;
