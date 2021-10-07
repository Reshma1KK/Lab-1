import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Reciept from "./Reciept.jsx"
import Axios from "axios";
import "../AddtoCart/AddtoCart.css"

function CreateReceipt() {


    const [customerData,getCustomerData]=useState([]);

      useEffect(() => {
        getAllCustomerData();
      },[]);

      const getAllCustomerData = () =>{
        Axios.get("http://localhost:3001/CustomerReciept")
        .then((response) => {
           // if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
             const allCustomerData = response.data.details;
             allCustomerData.map((order) =>
               (JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name) ? getCustomerData(order) : ""
             )
         }).catch(error =>
          console.error(error)
        )
      }



      return (
            <Fragment key={customerData.id} style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>
                    <Reciept order={customerData} />
            </Fragment>
          )



}

export default CreateReceipt
