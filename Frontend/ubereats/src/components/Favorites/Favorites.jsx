import React, {Fragment,useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import Favorite from "./Favorite.js";
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"


function Favorites() {
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

    const [favs,getFavs]=useState([]);

    useEffect(() => {
      getFavorites();
    },[]);
    const name=JSON.parse(localStorage["user"])[0].name;
    const getFavorites = () => {
      // Axios.get("http://localhost:3001/Dishes.jsx")
      // .then(response => console.log(response))
      // .catch(err => console.log("failed:",err));
        Axios.get("http://localhost:3001/Favorites")
        .then((response) => {
          const allFav=response.data.details;
            getFavs(allFav);
        })
        .catch(error =>
          console.error(`Error:${error}`));
    }

      return(
        <Fragment>
         <Row>
         <NavbarAddToCart />
         <h3 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"50px"}}>Favorites</h3>
         <hr />
         {favs.filter(function(fav) {
           console.log("liverpool "+ typeof(fav.customer_name));
           console.log("liverpool1 "+ typeof(JSON.parse(localStorage.getItem("user"))[0]["name"]));
           if ( ((fav.customer_name) ===(JSON.parse(localStorage.getItem("user"))[0]["name"]))) {
             return true;
           }
           return false;
         }).map(function(fav){
             return(
           <Col sm={12} md={6} lg={4} key={fav.id}>
             <Favorite fav={fav} />
           </Col>
         )
         })}
        </Row>
      </Fragment>
    );
    }



export default Favorites;
