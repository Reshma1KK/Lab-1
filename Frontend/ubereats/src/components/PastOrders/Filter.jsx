
import React,{useState,useEffect} from 'react';
import Axios from "axios";
import {Col} from "react-bootstrap";
import CustomerOrder from "./CustomerOrder.js"
import "../CustomComponents/Filter.css";


function Filter() {


  const [orders,getOrders]=useState([]);

const[orderRecievedIsChecked,setOrderRecievedIsChecked] = useState(false);
const[preparingIsChecked,setPreparingIsChecked] = useState(false);
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
        <div className="container-fluid" style={{marginTop:"0px", fontSize:"20px"}}>
        <div>
        <div className="container">
        <div className="row">

          <div className="col-md-8">
            <h2 className="grid-title"><i className="fa fa-filter"></i> Filters</h2>
            <hr />

            <h4>Delivery:</h4>
            <div class="checkbox">
              <label><input
              type="checkbox"
              className="icheck"
              name="orderRecieved"
              checked={orderRecievedIsChecked}
              value="orderRecieved"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setOrderRecievedIsChecked(e.target.checked);
                }
              }
              />
              Order recieved
              </label>
            </div>
            <div className="checkbox1">
              <label><input
              type="checkbox"
               className="icheck"
               name="preparing"
               checked={preparingIsChecked}
               value="preparing"
               id="check2"
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
            <div className="padding">
            </div>

            <h4>Take Away:</h4>

            <div className="checkbox2">
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
              /> Pick Up Ready
              </label>
            </div>

            <div className="padding">
            </div>
            <div className="checkbox2">
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
              /> Picked Up
              </label>
            </div>

            <div className="padding">
            </div>
        </div>
        </div>
        </div>
        </div>
         {orders.filter(function(order) {
        if(orderRecievedIsChecked==="" && preparingIsChecked==="" && pickUpReadyIsChecked==="" && pickedUpIsChecked===""){
          return false;
        }
        else if((((order.order_status.toLowerCase()).includes("Order Recieved".toLowerCase())) && orderRecievedIsChecked===true)
        || (((order.order_status.toLowerCase()).includes("Preparing".toLowerCase())) && preparingIsChecked===true) ||
        (((order.order_status.toLowerCase()).includes("Pick Up Ready".toLowerCase())) && pickUpReadyIsChecked===true)
        || (((order.order_status.toLowerCase()).includes("Picked Up".toLowerCase())) && pickedUpIsChecked===true))  {
        return true;
      }}).map(function(order){
       return(<Col sm={12} md={6} lg={4} key={order.id}>
         <CustomerOrder order={order} />
         </Col>
      )
     })
     }
       </div>
    )
}



export default Filter;
