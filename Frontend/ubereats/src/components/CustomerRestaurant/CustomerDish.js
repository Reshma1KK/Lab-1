import React,{useState} from 'react'
// import {Link} from "react-router-dom";




function CustomerDish({dish}) {

  const [count,setCount]=useState(0);


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

          <button
          type="button"
          className="btn btn-outline-dark minus-btn"
          style={{borderRadius:"30%",margin:"10px",justifyContent:"center"}}
          onClick={
            ()=>{
              setCount(count-1);
            }
          }
          >-</button>
          <span id="count">{count}</span>
          <button
          type="button"
          className="btn btn-outline-dark plus-btn"
          style={{borderRadius:"30%",margin:"10px",justifyContent:"center"}}
          onClick={
            ()=>{
              setCount(count+1);
            }
          }
          >+</button>
          <button type="button" className="btn btn-outline-success" style={{margin:"10px",borderRadius:"10%"}}>Add to Cart</button>
          </div>
          </div>
    </div>

  );
}



export default CustomerDish;
