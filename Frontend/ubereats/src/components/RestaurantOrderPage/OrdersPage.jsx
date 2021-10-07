import React,{Fragment} from 'react'
import NavBar from "../LandingPage/NavBar.jsx"
import {Row,Col} from "react-bootstrap";
import Orders from "./Orders.jsx"
import Filter from "../CustomComponentsRestaurant/Filter.jsx"


function OrdersPage(){




    return (
      <>
      <NavBar style={{position:"fixed",top:"0px",width:"100%",left:"0px"}} />
      <div className="container-fluid" >
      <Row>
      <Filter />
      </Row>
      <Row>
      <Col>
      <div className="container-fluid mt-5 mb-5">
      <div className="d-flex justify-content-center row w-100">
      <div className="col-md-8">
      <div className="p-2">
      <h2 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>Orders</h2>
      </div>
      </div>
      </div>
      </div>
      </Col>
      <div className="container-fluid" style={{fontFamily:"Postmates",backgroundColor:"#D8E3E7"}}>
      <div className="row w-100">
      <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded" >
       Customer Name
      </Col>
      <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded" >
      Dishes
       </Col>
       <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
        Type of Delivery Chosen by Customer
       </Col>
      <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
       Order Status
      </Col>
      <hr />
      </div>
      </div>
      <div style={{ marginTop:"0px"}}>
      <Orders />
      </div>
      </Row>
      </div>
      </>
    )
}

export default OrdersPage;
