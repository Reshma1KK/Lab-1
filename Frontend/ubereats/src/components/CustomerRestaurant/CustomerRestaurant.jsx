import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./Form.jsx";
import CustomerDashboard from "./CustomerDashboard.jsx";
import CustomerDishes from "./CustomerDishes.jsx";
import Navbar from "../Customer/Navbar.jsx"

function CustomerRestaurant (){


    // JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]
    // JSON.parse(localStorage.getItem("user"))[3]["location"]

    return (
        <div className="conatiner-fluid">
        <Navbar />
        <div className="dash">
        <CustomerDashboard />
        </div>
        <div>
        <CustomerDishes />
        </div>
        </div>

        )
      }


export default CustomerRestaurant;
