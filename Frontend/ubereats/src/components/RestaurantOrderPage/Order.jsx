import React,{Fragment,useState} from 'react'
import {Link} from "react-router-dom";
import {Row,Col} from "react-bootstrap";
import Axios from "axios"


 // const customer=[];


function Order({order}){

  const [deliveryStatus,getDeliveryStatus]=useState([]);
  const[delivery,setDelivery]=useState(null);
  const restaurantName=JSON.parse(localStorage["user"])[0]["restaurantName"];

  const updateCartTable = () => {
      Axios.put("http://localhost:3001/AddDeliveryStatus",{
        delivery:delivery,
        customerName:order.customer_name,
        restaurantName:order.restaurant_name
      })

    // alert("Updated successfully!");
  }

 if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (order.restaurant_name)){
// order.details[0].DISHES
// customer.push(order.customer_name);
//   (localStorage.setItem("customer",order.customer_name));
//   console.log("getting value",localStorage.getItem("customer"));
  return(
    <Fragment>
    <div className="row" style={{ fontFamily:"Postmates", height:"50px",lineHeight:"70px",marginRight:"12%"}}>
    <Col>
    <a href="http://localhost:3000/DisplayProfile" onClick={()=>(localStorage.setItem("customer",order.customer_name))}>{order.customer_name}</a>
   </Col>
     <Col>
     {order.DISHES}
    </Col>
    {order.delivery_status}
    <Col>
    <div className="container-fluid" style={{ marginLeft:"50%"}}>
        <div className="row" style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col>
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
        </Col>
        <Col>
          <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={()=>{updateCartTable(order.customer_name,order.restaurant_name)}}>✔️</button>
        </Col>
        </div>
    </div>
    </Col>
    </div>
    </Fragment>
  )
}

  return("")

}


export default Order;
