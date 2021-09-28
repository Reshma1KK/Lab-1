import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./Form.jsx";
import Dashboard from "../LandingPage/Dashboard.jsx";
import Dishes from "../LandingPage/Dishes.jsx";
import Navbar from "../Customer/Navbar.jsx"

function CustomerRestaurant (){


    // JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]
    // JSON.parse(localStorage.getItem("user"))[3]["location"]

    return (
        <div className="conatiner-fluid">
        <Navbar />
        <div className="dash">
        <Dashboard />
        </div>
        <div>
        <Dishes />
        </div>
        </div>

        )
      }


export default CustomerRestaurant;
