import React from 'react'
import {Link} from "react-router-dom";



function Dish({dish}){


 if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dish.res_name)){

  return(
    <div>
      <div>
      <div className="card mb-3" style="max-width: 540px" style={{width: "30rem"}}>
      <div className="row g-0">
      <div className="col-md-4">
      <img src={`data:image/jpeg;base64,${dish.dish_img}`} className="img-fluid rounded-start" alt="dish-img" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{`${dish.dish_name}`}</h3>
        <h6 className="card-text">{`${dish.dish_ingredients}`}</h6>
        <h6 className="card-text">{`${dish.dish_description}`}</h6>
        <h6 className="card-text">{`${dish.dish_category}`}</h6>
        <h6 className="card-text"><small className="text-muted">{`${dish.dish_price}`}</small></h6>
        <Link to="/EditDishes">
        <button type="button" classNameName="btn btn-success" style={{margin:"10px",borderRadius:"10%"}}>Edit</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

  return("")



}


export default Dish;
