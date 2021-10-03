import React,{useState} from 'react'
import Axios from "axios"
import image from "./addtocart.jpeg"

// import "./Modal.css"

export const Modal = ({showModal,setShowModal}) => {

  const [cartItems,setCartItems]=useState([]);
  const customerName = JSON.parse(localStorage["user"])[0].name;
  const customerEmail=JSON.parse(localStorage["user"])[0].email_id;
  const dishName=JSON.parse(localStorage["myDish"]).dish_name;
  const restaurantName =JSON.parse(localStorage["myDish"]).res_name;
  const price=JSON.parse(localStorage["myDish"]).dish_price;
  const dishCategory=JSON.parse(localStorage["myDish"]).dish_category;

    const CartItems = () => {
      Axios.post("http://localhost:3001/AddtoCart",{
        customerName:customerName,
        customerEmail:customerEmail,
        dishName:dishName,
        restaurantName:restaurantName,
        price:price,
        dishCategory:dishCategory
      }).then((response) =>{
        response.send("Item Added to cart!");
      });
    };



    return(
      <>
      {showModal ? (
        <div className="modal-all" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div showModal={showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Order?</h5>
              <button type="button" className="close btn-warning" data-dismiss="modal-all" aria-label="Close" style={{width:"50px",height:"50px"}} onClick={()=>setShowModal(prev=> !prev)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <img src={image}
                alt="add-to-cart" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={CartItems}>Add to Cart</button>
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
