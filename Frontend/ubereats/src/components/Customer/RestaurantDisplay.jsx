import React,{useState,useEffect,Fragment} from "react";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import Restaurant from "./Restaurant.js"
// import RestaurantsNearYou from "./RestaurantsNearYou.js"
import SearchBar from "../CustomComponents/SearchBar.jsx"


function RestaurantDisplay(){
    const [restaurants,getRestuarants]=useState([]);

    useEffect(() => {
      getAllRestaurants();
    },[]);

  const getAllRestaurants = () =>{
    Axios.get("http://localhost:3001/RestaurantDisplay")
    .then((response) => {
      const AllRestuarntData=response.data.details;
      getRestuarants(AllRestuarntData);
    })
    .catch(error =>
      console.error(`Error:{error}`));
  }

  

  // var resNear = restaurants.filter(function(restaurant) {
  //   if (!(restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])) {
  //     return false; // skip
  //   }
  //   return true;
  // }).map(function(restaurant) { });


  return(
    <Fragment>
    <Row>
    <SearchBar />
    </Row>
      <Row>
      <h3 style={{padding:"3%"}}>Restaurants Near You:</h3>
      {restaurants.filter(function(restaurant) {
        if (!(restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])) {
          return false;
        }
        return true;
      }).map(function(restaurant){
        return(<Col sm={12} md={6} lg={4} key={restaurant.id}>
          <Restaurant restaurant={restaurant} />
        </Col>
      )
      })}
      <h3 style={{padding:"3%"}}>Other Restaurants Open:</h3>
      {restaurants.filter(function(restaurant) {
        if ((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])) {
          return false;
        }
        return true;
        }).map(function(restaurant){
          return(
        <Col sm={12} md={6} lg={4} key={restaurant.id}>
          <Restaurant restaurant={restaurant} />
        </Col>
      )
    })}
      </Row>
    </Fragment>
  );
}

export default RestaurantDisplay;
