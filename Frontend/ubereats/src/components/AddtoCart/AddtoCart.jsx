import React,{useState,useEffect,Fragment} from 'react'
import Axios from "axios"
import {Row} from "react-bootstrap";
import AddtoCartItem from "./AddtoCartItem.js";
import backendServer from "../../webConfig.js";

// import "./Modal.css"
function AddtoCart (){

  const[cartItems,getCartItems]=useState([]);

  useEffect(() => {
    getAllCartItems();
  },[]);

    const getAllCartItems = () => {
      Axios.get(`${backendServer}/AddtoCart`)
      .then((response) =>{
        console.log("Inside Cart");
        const cartData = response.data.dashboard;
        getCartItems(cartData);
      }).catch(error => {
        console.error(`Error:${error}`);
      });
    };


return(
        <Fragment style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>
          <Row>
          </Row>
           <Row>
             <h3 style={{color:"white"}}>CART ITEMS</h3>
             {cartItems.filter(function(cart) {
               return true;
             }).map(function(cart){
               return(<div className="container-fluid" style={{fontSize:"1rem",color:"white"}} key={cart.id}>
                 <AddtoCartItem cart={cart} />
                 </div>
             )
             })}
          </Row>
      </Fragment>
    )
    }
export default AddtoCart;
