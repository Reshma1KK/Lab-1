import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import NavBar from "../LogOut/NavBar.jsx";
import {alert} from "react";

function RestaurantSignup() {

    const[restaurantNameErr,setRestaurantNameErr]=useState({});
    const[emailErr,setEmailErr]=useState({});
    const[passwordErr,setPasswordErr]=useState({});
    const [restaurantLocationErr,setRestaurantLocationErr]=useState({});

    const [restaurantName,setrestaurantName]=useState("");
    const [email,setEmail]=useState("");
    const [restaurantPassword,setrestaurantPassword]=useState("");
    const [restaurantLocation,setrestaurantLocation]=useState("");

    const restaurantSignup = (e) => {
      e.preventDefault();
      const isValid = formValidation();
      if(isValid){
        Axios.post("http://localhost:3001/RestaurantSignup", {
        name:restaurantName,
        email:email,
        password:restaurantPassword,
        location:restaurantLocation
        }).then (() =>{
        alert("Successfully Inserted");
          })
        window.open("./RestaurantLogin","_self");
      }
      setrestaurantName("");
      setEmail("");
      setrestaurantPassword("");
      setrestaurantLocation("");
    }

      const formValidation = () => {
        const restaurantNameErr={};
        const emailErr={};
        const passwordErr={};
        const restaurantLocationErr={};
        let isValid=true;

        if(restaurantName.trim().length < 3){
          restaurantNameErr.nameIsShort="Name is too short";
          isValid=false;
        }

        if(restaurantName.trim().length > 20){
          restaurantNameErr.nameIsLong="Name is too long";
          isValid=false;
        }

        if(!email.includes("@")){
          emailErr.emailIsIncorrect="Please enter a valid email";
          isValid=false;
        }
        if(!email.includes(".com")){
          emailErr.emailIsIncorrect="Please enter a valid email";
          isValid=false;
        }
        if(restaurantPassword.trim().length < 3){
          passwordErr.passwordIsShort="Password too short";
          isValid=false;
        }
        if(!restaurantPassword.includes("1","2","3")){
          passwordErr.passwordIsWrong="Password must contain special characters";
          isValid=false;
        }
        if(restaurantLocation.trim().length < 10){
          restaurantLocationErr.locationMistake="Please enter a proper location";
          isValid=false;
        }
        if(!restaurantLocation.includes("CA")){
          restaurantLocationErr.locationError="Please include zipcode";
          isValid=false;
        }


        setRestaurantNameErr(restaurantNameErr);
        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        setRestaurantLocationErr(restaurantLocationErr);
        return isValid;
      }


  return (
    <div>
    <NavBar />
    <h1 className="customer-heading">Uber <span className="heading-eats">Eats</span></h1>
    <h1 className="form-floating">Restaurant SignUp</h1>
    <div className="form-floating" encType="multipart/form-data">
     <input type="text" className="form-control" id="floatingName" placeholder="John Doe" name="restaurantName" onChange={(e) =>{
       setrestaurantName(e.target.value);
     }} />
     <label htmlFor="floatingName">Restaurant Name</label>
     {Object.keys(restaurantNameErr).map((key)=>{
       return <div style={{color:"red"}}>{restaurantNameErr[key]}</div>
     })}
    </div>
    <div className="form-floating mb-3">
     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={(e) => {
       setEmail(e.target.value);
     }} />
     <label htmlFor="floatingInput">Email address</label>
     {Object.keys(emailErr).map((key)=>{
       return <div style={{color:"red"}}>{emailErr[key]}</div>
     })}
    </div>
    <div className="form-floating">
     <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="restaurantPassword" onChange={(e) =>{
       setrestaurantPassword(e.target.value);
     }} />
     <label htmlFor="floatingPassword">Password</label>
     {Object.keys(passwordErr).map((key)=>{
       return <div style={{color:"red"}}>{passwordErr[key]}</div>
     })}
     </div>
     <div className="form-floating">
      <input type="text" className="form-control" id="floatingLocation" placeholder="location" name="restaurantLocation" onChange={(e) =>{
        setrestaurantLocation(e.target.value);
      }} />
      <label htmlFor="floatingLocation">Location</label>
      {Object.keys(restaurantLocationErr).map((key)=>{
        return <div style={{color:"red"}}>{restaurantLocationErr[key]}</div>
      })}
      </div>
     <div className="d-grid gap-2 form-floating">
     <button onClick={restaurantSignup} type="button" className="btn btn-outline-primary">Continue</button>
     </div>
     </div>
   );

}

export default RestaurantSignup;
