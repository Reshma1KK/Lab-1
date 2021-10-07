import React,{Fragment,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import CustomerProfile from "./CustomerProfile.js"


function Profile() {


    const [profileData,getProfileData]=useState([]);

    useEffect(() => {
      getAllProfileData();
    },[]);
    const getAllProfileData = () => {
          Axios.get("http://localhost:3001/CustomerPage")
          .then((response) =>{
            const allProfileData = response.data.customer;
            allProfileData.map((customerInfo) =>
              ((localStorage.getItem("customer")) == (customerInfo.name)) ? getProfileData(customerInfo) : ""
            )

          }).catch(err =>
            console.log(err))
        }

  return (

              <Fragment key={profileData.id}>
                      <CustomerProfile customerInfo={profileData} />
              </Fragment>
          )
}

export default Profile;
