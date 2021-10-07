import React from 'react'
import "./OrderFood.css"
import {Col} from "react-bootstrap";
var total=0;

function AddtoCartItemOrderFood({cart}) {

     if(cart.current_order.data[0]===1){
       var val;
       val=parseInt(JSON.parse(cart.price.replace('$', '')));
       total=total+val;
       const finalTotal=total;
       localStorage.setItem("total",finalTotal);
     }
     // console.log("Liverpool ",cart);
     //
     // // for(let val of {cart}){
     // //   total = total+val;
     // // }
     //  localStorage.setItem("total",total);


     if(cart.current_order.data[0] === 1) {

    return (

     <div className="container-fluid">
     <div className="row w-100">
     <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
      ➕
     </Col>
     <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
      {cart.dish_name}
      </Col>
     <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
      {cart.price}
     </Col>
     </div>
     <hr />
     </div>
    );
}
return("")
}

export default AddtoCartItemOrderFood;
