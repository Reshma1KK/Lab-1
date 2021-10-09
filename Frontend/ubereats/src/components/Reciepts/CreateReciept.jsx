import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Reciept from "./Reciept.jsx"
import Axios from "axios";
import {Row,Col} from "react-bootstrap"

function CreateReciept({}) {

// (JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name) ? getCustomerData(order) : ""

    const [customerData,getCustomerData]=useState([]);

      useEffect(() => {
        getAllCustomerData();
      },[]);

      const getAllCustomerData = () =>{
        Axios.get("http://localhost:3001/CustomerReciept")
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
           localStorage.setItem("id",order.id);
           if (!((JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name))) {
             return false;
           }
           else if(order.restaurant_name === localStorage.getItem("resName")){
             return true;
           }
         }).map(function(order){
           return(<Col sm={12} md={12} lg={12} key={order.id}>
             <Reciept order={order} />
           </Col>
         )
         })}
        </Row>
      </Fragment>
          )



}

export default CreateReciept
