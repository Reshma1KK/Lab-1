import React,{useState} from 'react'
import Axios from "axios"
import AddtoCart from "../AddtoCart/AddtoCart.jsx"
// import image from "./addtocart.jpeg"

// import "./Modal.css"

export const Modal = ({showModal,setShowModal}) => {

  const OrderFood = () => {
    Axios.get("http://localhost:3001/AddtoCart")
    .then((response) => {
      const CartValue=response.data.dashboard;
    })
    window.open("/OrderFood","_self");
  }

    return(
      <>
      {showModal ? (
        <div className="modal-all" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor:"#32502E"}} >
        <div showModal={showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Order?</h5>
              <button type="button" className="close btn-success" data-dismiss="modal-all" aria-label="Close" style={{width:"25px",height:"25px"}} onClick={()=>setShowModal(prev=> !prev)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <AddtoCart />
              <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={OrderFood}>Go to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      ) : null}
      </>
    )
  };


  // <div className="body-modal">
  // <div showModal={showModal}>
  //     <img src={image}
  //     alt="add-to-cart" />
  //     <div className="modal-dialog">
  //         <h3>Ready to Order?</h3>
  //         <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={CartItems}>Add Item</button>
  //     </div>
  //     <div aria-label="Close Modal" onClick={()=>setShowModal(prev=> !prev)} />
  //     </div>
  //   </div>
