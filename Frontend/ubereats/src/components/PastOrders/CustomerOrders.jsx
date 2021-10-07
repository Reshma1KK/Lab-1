import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerOrder from "./CustomerOrder.js"
import Axios from "axios";
import {Row,Col} from "react-bootstrap"

function CustomerOrders() {

// (JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name) ? getCustomerData(order) : ""

    const [customerData,getCustomerData]=useState([]);

      useEffect(() => {
        getAllCustomerData();
      },[]);

      const getAllCustomerData = () =>{
        Axios.get("http://localhost:3001/CustomerHistory")
        .then((response) => {
           // if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
             const allCustomerData = response.data.details;
                          getCustomerData(allCustomerData);
         }).catch(error =>
          console.error(error)
        )
      }



      return (
        <Fragment>
         <Row>
         {customerData.filter(function(order) {
           if (!((JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name))) {
             return false;
           }
           return true;
         }).map(function(order){
           return(<Col sm={12} md={12} lg={12} key={order.id}>
             <CustomerOrder order={order} />
           </Col>
         )
         })}
        </Row>
      </Fragment>
          )



}

export default CustomerOrders
