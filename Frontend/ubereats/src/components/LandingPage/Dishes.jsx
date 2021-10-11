import React, {Fragment,useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import Dish from "./Dish.js";
import backendServer from "../../webConfig.js";

function Dishes() {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     menu:[]
  //   }
  // }
  //
  // componentDidMount(){
  //   this.fetchData();
  // }


    const [dishes,getDishes]=useState([]);

    useEffect(() => {
      getAllDishes();
    },[]);

    const getAllDishes = () => {
      // Axios.get("http://localhost:3001/Dishes.jsx")
      // .then(response => console.log(response))
      // .catch(err => console.log("failed:",err));
        Axios.get(`${backendServer}/Dishes`)
        .then((response) => {
          const allDishes=response.data.dishes;
            getDishes(allDishes);
        })
        .catch(error =>
          console.error(`Error:{error}`));
    }

      return(

        <Fragment>
         <Row>
         <hr />
         <h3 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"50px"}}>Menu</h3>
         <hr />
         {dishes.filter(function(dish) {
           if (!((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dish.res_name))){
             return false;
           }
           return true;
         }).map(function(dish){
           return(<Col sm={12} md={6} lg={4} key={dish.id}>
             <Dish dish={dish} />
           </Col>
         )
         })}
        </Row>
      </Fragment>

     )
    }



export default Dishes;
