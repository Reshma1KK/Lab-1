import React,{ Fragment } from 'react'
import  "../AddtoCart/AddtoCart.css";
import {Col} from "react-bootstrap";

// cart.current_order === 1 ? getCartItems(cart) : ""


function AddtoCartItem({cart}) {
// console.log("hello",cart.current_order.data[0]);
// && localStorage.getItem("cartValue") === cart.restaurant_name
// console.log("resname",cart.restaurant_name)
if((cart.current_order.data[0] === 1)){
  return(
      <Fragment>
      <div className="row">
      <Col>
       {cart.dish_name}
       </Col>
      <Col>
       {cart.price}
      </Col>
      </div>
      </Fragment>
    // <div className="card dishes" style={{width: "300px"}}>
    // <div className="card-body">
    // <h5 className="card-text">{`${cart.dish_name}`}</h5>
    // <h5 className="card-text">{`${cart.price}`}</h5>
    // <h5 className="card-text">{`${cart.dish_category}`}</h5>
    // <button type="button" className="btn btn-success" style={{borderRadius:"50px"}}>Go to checkout</button>
    // </div>
    // </div>
  )
}

return ("")

}


export default AddtoCartItem;
