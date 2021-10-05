import React,{useState} from 'react'
import "./OrderFood.css"
import Axios from "axios"
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"
import AddtoCartCustomer from "./AddtoCartCustomer.jsx"
import {Row,Col} from "react-bootstrap";
import {ModalAddress} from "../CustomComponents/ModalAddress.js"


function OrderFoor({total}){

    const [showModal,setShowModal]=useState(false);

    const showAddress = () => {
      setShowModal(prev=> !prev);
    }
    const currentOrder=0;
    const name = JSON.parse(localStorage["user"])[0].name;
    const OrderPlaced = () => {
      Axios.put("http://localhost:3001/AddtoCart/OrderPlaced",{
        currentOrder:currentOrder,
        name:name
      }).then(response =>{
        console.log("Added to DB!");
      }).catch(err =>{
        console.log(err);
      })
      alert("Order Placed Successfully!")
    }

    return (
    <>
    <NavbarAddToCart />
    <Row>
    <Col>
    <div className="container-fluid mt-5 mb-5">
    <div className="d-flex justify-content-center row w-100">
    <div className="col-md-8">
    <div className="p-2">
    <h2 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>Shopping Cart</h2>
    </div>
    </div>
    </div>
    </div>
    <div className="container-fluid" style={{fontFamily:"Postmates"}}>
    <div className="row w-100">
    <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
     Id
    </Col>
    <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
     Name of item
     </Col>
    <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
     Price
    </Col>
    </div>
    <hr />
    </div>
    <div className="container" style={{backgroundColor:"#D8E3E7", marginTop:"0px"}}>
    <AddtoCartCustomer />
    </div>
    </Col>
    <Col style={{padding:"50px",backgroundColor:"#E6E6E6"}} className="container-fluid">
    <button type="button" className="btn btn-dark" onClick={showAddress}>📍</button>
    <ModalAddress showModal={showModal} setShowModal={setShowModal} />
    {console.log(localStorage.getItem("total"))}
    <div className="d-flex flex-row justify-content-center mt-3 p-2 rounded container">TOTAL:{localStorage.getItem("total")}$</div>
    <div className="justify-content-center rounded"><button className="btn btn-success btn-block btn-lg pay-button" type="button" style={{width:"90%", paddingTop:"10px",paddingBottom:"10px"}} onClick={OrderPlaced}>Place Order</button></div>
    </Col>
    </Row>
    </>
    );
}

export default OrderFoor
