import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";




function Reciept({order}){

  return(
     <div>
      <div className="container-fluid">
        <div className="card mb-12">
          <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                <h5 className="card-title" style={{backgroundColor:"black",color:"white"}}>{`${order.restaurant_name}`}</h5>
                <h5 className="card-title" style={{backgroundColor:"black",color:"white"}}>{`${order.location}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>{`${order.DISHES}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>{`${order.order_status}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>{`${order.date}`}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

  // <button type="button" className="btn btn-link" onClick={()=>showPopUp(order.restaurant_name)} style={{border:"none"}}>order receipt</button>

export default Reciept;
