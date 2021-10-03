import React,{useState} from "react";
import Axios from "axios";



function Restaurant({restaurant}){

  // if((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])){
  const[res,setRes]=useState("");
  const[id,setId]=useState("");

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
        <img src={`data:image/jpeg;base64,${restaurant.picture}`} class="card-img-top" alt="dish-img" />
          <div className="card-body">
            <h5 className="card-title">{`${restaurant.restaurantName}`}</h5>
            <h5 className="card-text">{`${restaurant.location}`}</h5>
          </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`${restaurant.description}`}</li>
          <li className="list-group-item muted">{`${restaurant.contact}`}</li>
          <li className="list-group-item">{`${restaurant.timings}`}</li>
        </ul>
        <div className="card-body">
        <button type="button" className="btn btn-success" style={{color:"#fff"}} onClick={getRestaurantLanding}>Order Now</button>
      </div>
      </div>
    )
  }
//   return(null)
// }


export default Restaurant;
