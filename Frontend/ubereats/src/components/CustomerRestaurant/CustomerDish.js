import React,{useState,useEffect, useCallback } from 'react'
// import {Link} from "react-router-dom";
// import { useSpring, animated } from 'react-spring';
import Axios from "axios";
import {Modal} from "../CustomComponents/Modal.jsx"
import  "../AddtoCart/AddtoCart.css";
import "../CustomComponents/Modal.css"



function CustomerDish({dish}) {

  const [count,setCount]=useState(0);
  const[myDish,setMyDish]=useState();
  const [showModal,setShowModal]=useState(false);


  const addToCart = () => {
    setShowModal(prev=> !prev);
    Axios.get("http://localhost:3001/Dishes")
    .then((response) => {
      setMyDish(response.data.dishes[(dish.id)-1]);
      localStorage.setItem("myDish", JSON.stringify(response.data.dishes[(dish.id)-1]));
   })

 };
    // Axios.post("http://localhost:3001/AddtoCart",{
    //   customerName:JSON.parse(localStorage.getItem(user[0].name)),
    //   customerEmail:JSON.parse(localStorage.getItem(user[0].email_id)),
    //   restaurantName:JSON.parse(localStorage.getItem(res.restaurantName)),
    //   dish_name:JSON.parse(localStorage.getItem(myDish.dish_name)),
    //   dish_price:JSON.parse(localStorage.getItem(myDish.dish_name)),
    //   dish_category:JSON.parse(localStorage.getItem(myDish.dish_name))
    // }).then((response)=>{



  return(
    <div className="card dishes" style={{width: "300px"}}>
    <img src={`data:image/jpeg;base64,${dish.dish_img}`} className="card-img-top" alt="dish-img" />
    <div className="card-body">
      <h5 className="card-title">{`${dish.dish_name}`}</h5>
      <h5 className="card-text">{`${dish.dish_ingredients}`}</h5>
      <h5 className="card-text">{`${dish.dish_price}`}</h5>
      <h5 className="card-text">{`${dish.dish_description}`}</h5>
      <h5 className="card-text">{`${dish.dish_category}`}</h5>

      <button
      type="button"
      className="btn btn-outline-dark minus-btn"
      style={{borderRadius:"30%",margin:"10px",justifyContent:"center"}}
      onClick={
        ()=>{
          setCount(count-1);
        }
      }
      >-</button>
      <span id="count">{count}</span>
      <button
      type="button"
      className="btn btn-outline-dark plus-btn"
      style={{borderRadius:"30%",margin:"10px",justifyContent:"center"}}
      onClick={
        ()=>{
          setCount(count+1);
        }
      }
      >+</button>
      <div className="text-center">
      <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={addToCart}>Add to Cart</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      </div>
      </div>



  );
}



export default CustomerDish;
