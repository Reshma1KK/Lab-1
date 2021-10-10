import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {ModalReciept} from "../CustomComponents/ModalReciept.jsx"



function CustomerOrder({order}){

  const [showModal,setShowModal]=useState(false);

  //if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
  return(
     <div>
      <div className="container-fluid">
        <div className="card mb-12">
          <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
                <h5 className="card-title">{`${order.restaurant_name}`}</h5>
                <h5 className="card-text">{`${order.DISHES}`}</h5>
                <h5 className="card-text">{`${order.order_status}`}</h5>
                <h5 className="card-text">{`${order.date}`}</h5>
                <h5 className="card-text">{`${order.delivery_status}`}</h5>
                <button type="button" className="btn btn-link openModalBtn" onClick={()=>{setShowModal(true,(localStorage.setItem("resName",order.restaurant_name)))}} style={{border:"none"}}>order receipt</button>
                {showModal && <ModalReciept closeModal={setShowModal}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )


}

  // <button type="button" className="btn btn-link" onClick={()=>showPopUp(order.restaurant_name)} style={{border:"none"}}>order receipt</button>

export default CustomerOrder;
