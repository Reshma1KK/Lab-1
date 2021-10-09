import React from 'react'
import "./OrderFood.css"
import {Col} from "react-bootstrap";

var total=0;

function AddtoCartItemOrderFood({cart}) {

  const val = (JSON.parse(cart.price.replace('$',"")));

  if(cart.current_order.data[0]===1){
    total=total+val;
  }

  // function total(item){
  //   total+=item;
  // }
  // val.forEach(total);



     // const finalTotal=total;
     // localStorage.setItem("total",finalTotal);
     // console.log("Liverpool ",cart);
     //
     // // for(let val of {cart}){
     // //   total = total+val;
     // // }
     //  localStorage.setItem("total",total);

     // Object.values(cart).forEach(price => {
     // total = total+(JSON.parse(cart.price.replace('$','')));
     // });
     // const finalTotal = total;
      localStorage.setItem("total",total);


     if(cart.current_order.data[0] === 1) {

    return (

     <div className="container-fluid">
     <div className="row">
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
