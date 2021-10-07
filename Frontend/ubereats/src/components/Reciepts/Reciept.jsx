import React,{useState,Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,Col} from "react-bootstrap";



function Reciept({order}){
  //if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
  return(
    <Fragment>
    <div className="conatiner-fluid" style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"20px", fontSize:"1.2rem"}}>
          <Row>
            <Col>
              {order.restaurant_name}
              </Col>
          </Row>
          <Col>
              {order.customer_name}
          </Col>
           <Col>
               {order.location}
           </Col>
            <Col>
                {order.dish_name}
            </Col>
             <Col>
                 {order.price}
             </Col>
            <Col>
                {order.total}
            </Col>

    </div>
    </Fragment>
    )


}



export default Reciept;
