
import React,{useState,useEffect} from 'react';
import Axios from "axios";
import {Col} from "react-bootstrap";
import Order from "../RestaurantOrderPage/Order.jsx"
import "../CustomComponents/Filter.css";


function Filter() {


  const [orders,getOrders]=useState([]);

const[newOrderIsChecked,setNewOrderIsChecked] = useState(false);
const[deleveredIsChecked,setDeliveredIsChecked] = useState(false);
const[cancelledOrder,setCancelledOrder] = useState(false);



    useEffect(() => {
      getAllOrders();
    },[]);

const getAllOrders = () =>{

    Axios.get("http://localhost:3001/CartFilter")
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

            <h4>Order Status:</h4>
            <div class="checkbox">
              <label><input
              type="checkbox"
              className="icheck"
              name="newOrder"
              checked={newOrderIsChecked}
              value="newOrder"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setNewOrderIsChecked(e.target.checked);
                }
              }
              />
              New Order
              </label>
            </div>
            <div className="checkbox1">
              <label><input
              type="checkbox"
               className="icheck"
               name="delivery"
               checked={deleveredIsChecked}
               value="delivered"
               id="check2"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setDeliveredIsChecked(e.target.checked);
                }
              }
              />
              Delivered
              </label>
            </div>
            <div className="padding">
            </div>

            <div className="checkbox2">
              <label>
              <input
              type="checkbox"
              className="icheck"
              value="cancelledOrder"
              checked={cancelledOrder}
              onChange={
                (e) => {
                  setCancelledOrder(e.target.checked);
                }
              }
              /> Cancelled
              </label>
            </div>

            <div className="padding">
            </div>
        </div>
        </div>
        </div>
        </div>
         {orders.filter(function(order) {
        if(newOrderIsChecked==="" && deleveredIsChecked==="" && cancelledOrder==""){
          return false;
        }
        else if((((order.order_status.toLowerCase()).includes("New Order".toLowerCase())) && newOrderIsChecked===true)
        || (((order.order_status.toLowerCase()).includes("Delivered".toLowerCase())) && deleveredIsChecked===true) ||
        (((order.order_status.toLowerCase()).includes("Cancelled".toLowerCase())) && cancelledOrder===true))  {
        return true;
      }}).map(function(order){
           return(<div key={order.id}>
             <Order order={order} />
           </div>
         )
       })}
       </div>
    )
}



export default Filter;
