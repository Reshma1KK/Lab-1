import React,{useState,useEffect,Fragment} from 'react';
import Axios from "axios";
import {Col} from "react-bootstrap";
import CustomerOrderfilter from "./CustomerOrderfilter.js"
import "../CustomComponents/Filter.css";


function Filter() {


  const [orders,getOrders]=useState([]);

const[orderRecievedIsChecked,setOrderRecievedIsChecked] = useState(false);
const[preparingIsChecked,setPreparingIsChecked] = useState(false);
const[onTheWayIsChecked,setOnTheWayIsChecked] = useState(false);
const[deliveredIsChecked,setDeliveredIsChecked] = useState(false);
const[pickUpReadyIsChecked,setPickUpReadyIsChecked] = useState(false);
const[pickedUpIsChecked,setPickedUpIsChecked] = useState(false);



    useEffect(() => {
      getAllOrders();
    },[]);

const getAllOrders = () =>{

    Axios.get("http://localhost:3001/CustomerFilter")
    .then((response) => {
      const allOrders=response.data.details;
        getOrders(allOrders);
    })
    .catch(error =>
      console.error(`Error:{error}`));
  }


  return (

    <div className="container-fluid"  style={{fontFamily:"Postmates",fontWeight:"bold",textAlign:"justify",margin:"3%",backgroundColor:"#F0E5CF",color:"black"}}>
        <div>
          <h2 className="grid-title" style={{marginTop:"50px", fontSize:"1rem",fontFamily:"Postmates", fontWeight:"bold",color:"black"}}><i className="fa fa-filter"></i> Filters</h2>

          <h4 style={{marginTop:"0px", fontSize:"1rem",fontFamily:"Postmates", fontWeight:"bold",color:"black"}}>Status:</h4>
          <div class="checkbox">
            <label>
            <input
            type="checkbox"
            className="icheck"
            checked={orderRecievedIsChecked}
            value="orderRecieved"
            onChange={
              (e) => {
                console.log(e.target.value);
                setOrderRecievedIsChecked(e.target.checked);
              }
            }
            />
            Order Recieved
            </label>
          </div>
          <div className="checkbox">
            <label ><input
            type="checkbox"
             className="icheck"
             checked={preparingIsChecked}
             value="preparing"
            onChange={
              (e) => {
                console.log(e.target.value);
                setPreparingIsChecked(e.target.checked);
              }
            }
            />
            Preparing
            </label>
          </div>



            <h4 style={{marginTop:"0px", fontSize:"1rem", fontFamily:"Postmates", fontWeight:"bold"}}>Delivery:</h4>
          <div className="checkbox2">
            <label>
            <input
            type="checkbox"
            className="icheck"
            value="onTheWay"
            checked={onTheWayIsChecked}
            onChange={
              (e) => {
                setOnTheWayIsChecked(e.target.checked);
              }
            }
            /> On The Way
            </label>
          </div>

          <div className="checkbox">
            <label>
            <input
            type="checkbox"
            className="icheck"
            value="delivered"
            checked={deliveredIsChecked}
            onChange={
              (e) => {
                setDeliveredIsChecked(e.target.checked);
              }
            }
            /> Delivered
            </label>
          </div>


          <h4 style={{marginTop:"0px", fontSize:"1rem", fontFamily:"Postmates", fontWeight:"bold"}}>Delivery:</h4>
          <div className="checkbox3">
            <label>
            <input
            type="checkbox"
            className="icheck"
            value="pickUpReady"
            checked={pickUpReadyIsChecked}
            onChange={
              (e) => {
                setPickUpReadyIsChecked(e.target.checked);
              }
            }
            />
            Pick Up Ready
            </label>
          </div>

          <div className="checkbox">
            <label>
            <input
            type="checkbox"
            className="icheck"
            value="pickedUp"
            checked={pickedUpIsChecked}
            onChange={
              (e) => {
                setPickedUpIsChecked(e.target.checked);
              }
            }
            />
            Picked Up
            </label>
          </div>


      </div>

       {orders.filter(function(order) {
        console.log(order.order_status)
       if(orderRecievedIsChecked==="" && preparingIsChecked===""
       && pickUpReadyIsChecked==="" && pickedUpIsChecked===""
       && onTheWayIsChecked==="" && deliveredIsChecked===""){
         return false;
       }
       else if(((((order.order_status||"").toLowerCase()).includes("Order Recieved".toLowerCase())) && orderRecievedIsChecked===true)
       || ((((order.order_status||"").toLowerCase()).includes("Preparing".toLowerCase())) && preparingIsChecked===true) ||
       ((((order.order_status||"").toLowerCase()).includes("On the Way".toLowerCase())) && onTheWayIsChecked===true) ||
       ((((order.order_status||"").toLowerCase()).includes("Delivered".toLowerCase())) && deliveredIsChecked===true) ||
       ((((order.order_status||"").toLowerCase()).includes("Pick Up Ready".toLowerCase())) && pickUpReadyIsChecked===true)
       || ((((order.order_status||"").toLowerCase()).includes("Picked Up".toLowerCase())) && pickedUpIsChecked===true))  {
       return true;
     }}).map(function(order){
      return(<Col sm={12} md={6} lg={4} key={order.id}>
        <CustomerOrderfilter order={order} />
        </Col>
     )
    })
    }
   </div>
  )
}





export default Filter;