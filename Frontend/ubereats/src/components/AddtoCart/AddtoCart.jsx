import React,{useState,useEffect,Fragment} from 'react'
import Axios from "axios"
import image from "../CustomComponents/addtocart.jpeg"
import {Row,Col} from "react-bootstrap";
import Navbar from "../Customer/Navbar.jsx"
import CustomerDish from "../CustomerRestaurant/CustomerDish.js";
import AddtoCartItem from "./AddtoCartItem.js";

// import "./Modal.css"
function AddtoCart (){

  const[cartItems,getCartItems]=useState([]);

  useEffect(() => {
    getAllCartItems();
  },[]);

    const getAllCartItems = () => {
      Axios.get("http://localhost:3001/AddtoCart")
      .then((response) =>{
        console.log("Inside Cart");
        const cartData = response.data.dashboard;
        getCartItems(cartData);
      }).catch(error => {
        console.error(`Error:${error}`);
      });
    };


return(
        <Fragment style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px",padding:"10%"}}>
          <Row>
          </Row>
           <Row>
             <hr />
             <h3>CART ITEMS</h3>
             <hr />
             {cartItems.filter(function(cart) {
               return true;
             }).map(function(cart){
               return(<Col sm={12} md={6} lg={4} key={cart.id}>
                 <AddtoCartItem cart={cart} />
               </Col>
             )
             })}
          </Row>
      </Fragment>
    )
    }
export default AddtoCart;
