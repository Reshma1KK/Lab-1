import React,{useState } from 'react'
// import {Link} from "react-router-dom";
// import { useSpring, animated } from 'react-spring';
import Axios from "axios";
import  "../AddtoCart/AddtoCart.css";
// import "../CustomComponents/Modal.css"

// JSON.stringify(localStorage.setItem("cartValue",(JSON.parse(localStorage.getItem("res"))["restaurantName"])));
function CustomerDish({dish}) {

  // if(currentOrder==0 ){
  //   JSON.stringify(localStorage.setItem("cartValue",dish.res_name))
  // }
  // else{
  //   JSON.stringify(localStorage.setItem("cartValue","R&B Tea"))
  // }


  const[myDish,setMyDish]=useState([]);

 const[cart,setCart]=useState([]);
 // const[page,setPage]=useState(PAGE_DISHES)
 const customerName = JSON.parse(localStorage["user"])[0].name;
 const customerEmail=JSON.parse(localStorage["user"])[0].email_id;
 const dishName=dish.dish_name;
 const restaurantName=dish.res_name;
 const price=dish.dish_price;
 const dishCategory=dish.dish_category;
 const currentOrder=1;



  const addToCart = (dish) => {
    console.log(dish)
    if(localStorage.getItem("cartVal")===""){
        localStorage.setItem("cartVal",dish.res_name)
        setCart([...cart,dish]);
        // JSON.stringify(localStorage.setItem("cartValue",dish.res_name));
        Axios.post("http://localhost:3001/AddtoCart",{
          customerName:customerName,
          customerEmail:customerEmail,
          dishName:dishName,
          restaurantName:restaurantName,
          price:price,
          dishCategory:dishCategory,
          currentOrder:currentOrder
        })
          alert("Items added to shopping Cart")
      }
    else{
      if(localStorage.getItem("cartVal")!=dish.res_name){
        alert(`Your order contains items from ${(localStorage.getItem("cartVal"))}, Do you want to create a new order from ${dish.res_name}`);
        Axios.delete("http://localhost:3001/AddtoCart")
        localStorage.setItem("cartVal",dish.res_name)
        console.log("Deleted!");
      }
      else{
          setCart([...cart,dish]);
          // JSON.stringify(localStorage.setItem("cartValue",dish.res_name));
          Axios.post("http://localhost:3001/AddtoCart",{
            customerName:customerName,
            customerEmail:customerEmail,
            dishName:dishName,
            restaurantName:restaurantName,
            price:price,
            dishCategory:dishCategory,
            currentOrder:currentOrder
          })
            alert("Items added to shopping Cart")
        }
      }
    }
      //   setCart([...cart,dish]);
      //   // JSON.stringify(localStorage.setItem("cartValue",dish.res_name));
      //   Axios.post("http://localhost:3001/AddtoCart",{
      //     customerName:customerName,
      //     customerEmail:customerEmail,
      //     dishName:dishName,
      //     restaurantName:restaurantName,
      //     price:price,
      //     dishCategory:dishCategory,
      //     currentOrder:currentOrder
      //   })
      //     alert("Items added to shopping Cart")
      // }
    //         else{
    //           alert(`Your oder contains items from ${localStorage.getItem("cartValue")}, Do you want to create a new order from ${dish.res_name}`);
    //         }
    // }


    // else{
    //   alert(`Your oder contains items from ${(dish.res_name)[dish.id-1]}, Do you want to create a new order from ${dish.res_name}`);
    // }
  // };


    // Axios.post("http://localhost:3001/AddtoCart",{
    //   customerName:JSON.parse(localStorage.getItem(user[0].name)),
    //   customerEmail:JSON.parse(localStorage.getItem(user[0].email_id)),
    //   restaurantName:JSON.parse(localStorage.getItem(res.restaurantName)),
    //   dish_name:JSON.parse(localStorage.getItem(myDish.dish_name)),
    //   dish_price:JSON.parse(localStorage.getItem(myDish.dish_name)),
    //   dish_category:JSON.parse(localStorage.getItem(myDish.dish_name))
    // }).then((response)=>{

  // const renderCart = () => (
  //   <>
  //   <h1>Cart</h1>
  //   <div classNameName="Dishes"></div>
  //   {cart.map((Dishes,idx) => {
  //     <div classNameName="Dish" key={idx}>
  //     <h3>{dish.name}</h3>
  //     <h4>{dish.cost}</h4>
  //     <img src={`data:image/jpeg;base64,${dish.dish_img}`} alt="cart-img" />
  //     <button type="button" onClick={()=>removeFromCart(dish)}>Remove</button>
  //     </div>
  //   })}
  // </>
// )

  return(

    <div>
      <div className="card mb-3" style={{width: "25rem",maxWidth: "540px"}}>
      <div className="row g-0">
      <div className="col-md-4">
      <img src={`data:image/jpeg;base64,${dish.dish_img}`} className="img-fluid rounded-start" alt="dish-img" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{`${dish.dish_name}`}</h3>
        <h6 className="card-text">{`${dish.dish_ingredients}`}</h6>
        <h6 className="card-text">{`${dish.dish_description}`}</h6>
        <h6 className="card-text">{`${dish.dish_category}`}</h6>
        <h6 className="card-text"><small className="text-muted">{`${dish.dish_price}`}</small></h6>
        <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={()=>{addToCart(dish)}}>Add to Cart</button>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default CustomerDish;
