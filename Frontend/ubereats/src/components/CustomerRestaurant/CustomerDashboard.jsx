import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerForm from "./CustomerForm.js";
import Axios from "axios";
import backendServer from "../../webConfig.js";


function CustomerDashboard(){


  const [resData,getResData]=useState([]);
    // constructor(props){
    //   super(props)
    //   this.state = {
    //     file: null
    //   }
    //   this.handleChange = this.handleChange.bind(this)
    // }
    //
    // handleChange(event) {
    //   this.setState({
    //     file: URL.createObjectURL(event.target.files[0])
    //   })
    // }

    // JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]
    // JSON.parse(localStorage.getItem("user"))[3]["location"]

    useEffect(() => {
      getAllResData();
    },[]);

    const getAllResData = () =>{
      Axios.get(`${backendServer}/RestaurantLanding`)
      .then((response) => {
         // if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
           const allResData = response.data.dashboard;
           allResData.map((dash) =>
             (JSON.parse(localStorage.getItem("res"))["restaurantName"]) === (dash.restaurantName) ? getResData(dash) : ""
           )
       }).catch(error =>
        console.error(error));
    }



    return (
          <Fragment key={resData.id}>
                  <CustomerForm dash={resData} />
          </Fragment>
        )
      }




export default CustomerDashboard;
