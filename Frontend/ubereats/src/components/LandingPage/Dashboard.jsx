import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form.jsx";
import Axios from "axios";
import backendServer from "../../webConfig.js";


function Dashboard(){


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
             (JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName) ? getResData(dash) : ""
           )
       }).catch(error =>
        console.error(`Error:{error}`));
    }



    return (
          <Fragment key={resData.id}>
                  <Form dash={resData} />
          </Fragment>
        )
      }




export default Dashboard;
