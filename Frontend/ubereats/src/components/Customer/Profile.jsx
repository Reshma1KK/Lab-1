import React,{Fragment,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import CustomerProfile from "./CustomerProfile.jsx"
import backendServer from "../../webConfig.js";


function Profile() {


    const [profileData,getProfileData]=useState([]);

    useEffect(() => {
      getAllProfileData();
    },[]);

    const getAllProfileData = () => {
          Axios.get(`${backendServer}/CustomerPage`)
          .then((response) =>{
            const allProfileData = response.data.customer;
            allProfileData.map((customerInfo) =>
              (JSON.parse(localStorage.getItem("user"))[0]["name"]) === (customerInfo.name) ? getProfileData(customerInfo) : ""
            )
          }).catch(err =>
            console.log(`Error:{error}`));
        }

  return (
              <Fragment key={profileData.id}>
                      <CustomerProfile customerInfo={profileData} />
              </Fragment>
          )
}

export default Profile;
