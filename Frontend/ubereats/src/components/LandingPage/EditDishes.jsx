import React,{useState,Fragment} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";
import {Row,Col} from "react-bootstrap"


function EditDishes(){


  const[newDishName,setNewDishName]= useState("");
  const [newDishIngredients,setNewDishIngredients] = useState("");
  const [newDishPrice,setNewDishPrice] = useState("");
  const [newDishDescription,setNewDishDescription] = useState("");
  const [newDishCategory,setNewDishCategory] = useState("");

  function editDishName() {
      Axios.put("http://localhost:3001/EditName",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishName:newDishName
      })
      alert("Updated successfully")
    }


  function editDishIngredients() {
      Axios.put("http://localhost:3001/EditIngredients",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishIngredients:newDishIngredients
      })
      alert("Updated successfully")
    }
  function editDishPrice() {
      Axios.put("http://localhost:3001/EditPrice",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishPrice:newDishPrice,
      })
      alert("Updated successfully")
    }
  function editDishDescription() {
        Axios.put("http://localhost:3001/EditDishDescription",
        {
          resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
          dishName:localStorage.getItem("val"),
          newDishDescription:newDishDescription
        })
        alert("Updated successfully")
      }
  function editDishCategory() {
        Axios.put("http://localhost:3001/EditCategory",
        {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishCategory:newDishCategory
        })
        alert("Updated successfully")
      }

  return(
    <Fragment>
    <NavBar />
    <h2>{JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]}</h2>
    <Row style={{margin:"100px"}}>
    <Col>
    <input
     type="text"
     name="newDishName"
     placeholder="Dish Name"
     className="form-control"
     onChange = {
       (e) => {
         setNewDishName(e.target.value);
       }
     }
    />
    </Col>
    <Col>
      <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishName}>✔️</button>
      </Col>
      </Row>
    <Row style={{margin:"100px"}}>
    <Col>
    <input
     type="text"
     name="newDishIngredients"
     placeholder="Ingredients"
     className="form-control"
     onChange = {
       (e) => {
         setNewDishIngredients(e.target.value);
       }
     }
    />
    </Col>
    <Col>
      <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishIngredients}>✔️</button>
      </Col>
      </Row>

      <Row style={{margin:"100px"}}>
      <Col>
      <input
       type="text"
       name="newDishPrice"
       placeholder="Price"
       className="form-control"
       onChange = {
         (e) => {
           setNewDishPrice(e.target.value);
         }
       }
      />
      </Col>
      <Col>
        <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishPrice}>✔️</button>
        </Col>
        </Row>

        <Row style={{margin:"100px"}}>
        <Col>
        <input
         type="text"
         name="newDishDescription"
         placeholder="Description"
         className="form-control"
         onChange = {
           (e) => {
             setNewDishDescription(e.target.value);
           }
         }
        />
        </Col>
        <Col>
          <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishDescription}>✔️</button>
          </Col>
          </Row>

        <Row style={{margin:"100px"}}>
        <Col>
        <input
         type="text"
         name="newDishCategory"
         placeholder="Category"
         className="form-control"
         onChange = {
           (e) => {
             setNewDishCategory(e.target.value);
           }
         }
        />
        </Col>
        <Col>
          <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishCategory}>✔️</button>
          </Col>
          </Row>

    </Fragment>
  );

}

export default EditDishes;
