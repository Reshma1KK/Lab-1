import React,{useState} from "react";
import Axios from "axios";



function Restaurant({restaurant}){

  // if((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])){
  const[res,setRes]=useState("");


  function getRestaurantLanding(){
    Axios.get("http://localhost:3001/Restaurant")
    .then((response) => {
          setRes(response.data.details[(restaurant.id)-1]);
          localStorage.setItem("res", JSON.stringify(response.data.details[(restaurant.id)-1]));
          window.open("/CustomerRestaurant","_self");
    })


  };

  return(
      <div className="card restaurant-style" style={{width:"66%"}}>
        <img src={`data:image/jpeg;base64,${restaurant.picture}`} className="card-img-top" alt="dish-img" style={{width:"300px",height:"150px"}} />
          <div className="card-body">
            <a href="#" onClick={getRestaurantLanding} style={{color:"green"}}><h5 className="card-title">{`${restaurant.restaurantName}`}</h5></a>
          </div>
      </div>
    )
  }
//   return(null)
// }


export default Restaurant;
