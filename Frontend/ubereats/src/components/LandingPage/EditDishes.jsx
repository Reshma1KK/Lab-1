import React,{useState} from "react";
import Axios from "axios";
import NavBar from "./NavBar";


function EditDishes(){


  const[dishName,setDishName]= useState("");
  const [newDishIngredients,setNewDishIngredients] = useState("");
  const [newDishPrice,setNewDishPrice] = useState("");
  const [newDishDescription,setNewDishDescription] = useState("");
  const [newDishCategory,setNewDishCategory] = useState("");

  function editDishes (id){
    Axios.put("http://localhost:3001/EditDishes",
    {

      dishName:dishName,
      newDishIngredients:newDishIngredients,
      newDishPrice:newDishPrice,
      newDishDescription:newDishDescription,
      newDishCategory:newDishCategory
    })
  }

  return(
    <div className="card">
    <NavBar />
    <div className="card-body">
    <h2>{JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]}</h2>
    </div>
    <div className="card-body">
    <input
     type="text"
     className = "form-control"
     name="dishName"
     placeholder="Name of the Dish"
     onChange = {
       (e) => {
         setDishName(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
     type="text"
    className = "form-control"
     name="newDishIngredients"
     placeholder="Ingredients"
     onChange = {
       (e) => {
         setNewDishIngredients(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
     type="text"
    className = "form-control"
     name="newDishPrice"
     placeholder="Price"
     onChange = {
       (e) => {
         setNewDishPrice(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
    type="text"
   className = "form-control"
    name="newDishDescription"
    placeholder="Description Dish"
    onChange= { e => {
      setNewDishDescription(e.target.value);
    }}
    />
    </div>
    <div className="card-body">
    <input
    type="text"
    className = "form-control"
    name="newDishCategory"
    placeholder="Category of food"
    onChange= { e => {
      setNewDishCategory(e.target.value);
    }}
    />
    </div>
    <button type="button" class="btn btn-outline-light" onClick={editDishes}>Save Changes</button>
    </div>
  )
}


export default EditDishes;
