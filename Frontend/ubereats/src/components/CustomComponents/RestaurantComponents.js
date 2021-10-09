import React,{useState} from "react";
import Axios from "axios";


function Restaurant({restaurant}){

  // if((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])){
  const[res,setRes]=useState("");

  // let btnHeart = document.querySelector("#heart");
  // btnHeart.addEventListener("click", () => btnHeart.style.color="red");

  var fav = false;
 const [favorite,setFavorite]=useState([]);

const name=JSON.parse(localStorage["user"])[0].name;
const restaurantName=restaurant.restaurantName;
const restaurantLocation=restaurant.location;

function addToFavorites() {
  // const name=JSON.parse(localStorage["user"])[0].name;
  // // console.log(restaurant.restaurantName);
  setFavorite([...favorite,restaurant]);
  Axios.post("http://localhost:3001/Favorites",{
    name:name,
    restaurantName:restaurantName,
    restaurantLocation:restaurantLocation,
  })
  alert("Restuarant Added as Favorite")
}


  function getRestaurantLanding(){
    Axios.get("http://localhost:3001/Restaurant")
    .then((response) => {
          setRes(response.data.details[(restaurant.id)]);
          localStorage.setItem("res", JSON.stringify(response.data.details[(restaurant.id)]));
          window.open("/CustomerRestaurant","_self");
    })


  };

  return(
      <div className="card restaurant-style" style={{width:"45%"}}>
        <img src={restaurant.picture} className="card-img-top" alt="dish-img" style={{width:"293px",height:"150px"}} />
        <button id="heart" type="button" style={{width:"30px",backgroundColor:"white",border:"none"}} onClick={addToFavorites}>
        {(fav === false) ?
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="grey" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
          </path>
          </svg>
        :
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="red" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
        </path>
        </svg>}
        </button>
          <div className="card-body">
            <a href="#" onClick={()=>{getRestaurantLanding(restaurant.id)}} style={{color:"green"}}><h5 className="card-title">{`${restaurant.restaurantName}`}</h5></a>
          </div>
      </div>
    )
  }
//   return(null)
// }


export default Restaurant;
