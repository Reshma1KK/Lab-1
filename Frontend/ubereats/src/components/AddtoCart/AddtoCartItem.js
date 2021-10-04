import React,{useState,useEffect, Fragment } from 'react'
import Axios from "axios";
import  "../AddtoCart/AddtoCart.css";
import {Row,Col} from "react-bootstrap";



function AddtoCartItem({cart}) {


  return(
      <Fragment>
      <Row>
          <ul>
            <li>
            <Col>
            {`${cart.dish_name}`}
            </Col>
            <Col>
            {`${cart.price}`}
            </Col>
            <Col>
            {`${cart.dish_category}`}
            </Col>
           </li>
          </ul>
      </Row>
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



export default AddtoCartItem;
