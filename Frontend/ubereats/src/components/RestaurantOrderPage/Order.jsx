import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {Row,Col} from "react-bootstrap";
import Axios from "axios"
import backendServer from "../../webConfig.js";


 // const customer=[];


function Order({order}){

  const [deliveryStatus,getDeliveryStatus]=useState([]);
  const[delivery,setDelivery]=useState(null);
  const restaurantName=JSON.parse(localStorage["user"])[0]["restaurantName"];


  const updateCartTable = () => {
      Axios.put(`${backendServer}/AddDeliveryStatus`,{
        delivery:delivery,
        customerName:order.customer_name,
        restaurantName:order.restaurant_name,
        temp:order.temp
      })

    // alert("Updated successfully!");
  }

 if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (order.restaurant_name)){
// order.details[0].DISHES
// customer.push(order.customer_name);
//   (localStorage.setItem("customer",order.customer_name));
//   console.log("getting value",localStorage.getItem("customer"));
  return(


    <div className="container-fluid">
      <div className="row">
        <div className="col">
       <a href="http://52.15.59.71:3000/DisplayProfile" onClick={()=>(localStorage.setItem("customer",order.customer_name))}>{order.customer_name}</a>
        </div>
        <div className="col">
      {order.DISHES}
        </div>
        <div className="col">
      {order.delivery_status}
        </div>
        <div className="col">

          <select
          className="form-value"
          name="delivery"
          style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"200px"}}
          onChange={
            (e)=>{
              setDelivery(e.target.value);
            }}
          >
            <option value="select">Select</option>
            <option value="Order Received">Order Received</option>
            <option value="Preparing">Preparing</option>
            <option value="On the Way">On the Way</option>
            <option value="Delivered">Delivered</option>
            <option value="Pick Up Ready">Pick Up Ready</option>
            <option value="Picked Up">Picked Up</option>
          </select>

          </div>


          <button type="button" style={{textAlign:"center",borderRadius:"100%",backgroundColor:"green",width:"40px",height:"35px"}} onClick={()=>{updateCartTable(order.customer_name,order.restaurant_name,order.temp)}}>✔️</button>

      </div>
    </div>


  )
}

  return("")

}


export default Order;
