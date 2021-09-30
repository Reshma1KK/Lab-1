import React from 'react'
import {Link} from "react-router-dom";



function CustomerDish({dish}){




  return(
    <div>
        <div className="card dishes" style={{width: "300px"}}>
        <img src={`data:image/jpeg;base64,${dish.dish_img}`} className="card-img-top" alt="dish-img" />
        <div className="card-body">
          <h5 className="card-title">{`${dish.dish_name}`}</h5>
          <h5 className="card-text">{`${dish.dish_ingredients}`}</h5>
          <h5 className="card-text">{`${dish.dish_price}`}</h5>
          <h5 className="card-text">{`${dish.dish_description}`}</h5>
          <h5 className="card-text">{`${dish.dish_category}`}</h5>
          <Link>
          <button type="button" className="btn btn-success" style={{margin:"10px"}}>Add to Cart</button>
          </Link>
          </div>
          </div>
    </div>
  )
}



export default CustomerDish;
