import React,{useState} from "react";
import Axios from "axios";


function Favorite({fav}){

  // if((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])){
  const[res,setRes]=useState([]);

  // let btnHeart = document.querySelector("#heart");
  // btnHeart.addEventListener("click", () => btnHeart.style.color="red");



  function getRestaurantLanding(){
    Axios.get("http://localhost:3001/Favorites")
    // JSON.parse(localStorage.getItem("res"))["restaurantName"])
    console.log(fav.restaurant_name);
    var tempRestaurantObj = {"restaurantName":fav.restaurant_name}
      setRes((fav.restaurant_name));
      localStorage.setItem("res",JSON.stringify(tempRestaurantObj));
      window.open("/CustomerRestaurant","_self");
  };


  return(
      <div className="card restaurant-style" style={{width:"66%"}}>
          <div className="card-body">
            <a href="#" onClick={getRestaurantLanding} style={{color:"green"}}><h5 className="card-title">{`${fav.restaurant_name}`}</h5></a>
            <h5>{`${fav.restaurant_location}`}</h5>
          </div>
      </div>
    )
  }
//   return(null)
// }


export default Favorite;
