import React,{useState} from 'react'
import NavBar from "./NavBar.jsx"
import Axios from "axios";

function AddDishes() {

  const resName=(JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]);

  const[dishName,setDishName]= useState("");
  const [dishIngredients,setDishIngredients] = useState("");
  const [dishImg,setDishImg] = useState("");
  const [dishPrice,setDishPrice] = useState("");
  const [dishDescription,setDishDescription] = useState("");
  const [dishCategory,setDishCategory] = useState("");
  const [dishRes,setDishRes]=useState("");

  const addDish = () => {
    Axios.post("http://localhost:3001/AddDishes",{
      dishName:dishName,
      dishIngredients:dishIngredients,
      dishImg:dishImg,
      dishPrice:dishPrice,
      dishDescription:dishDescription,
      dishCategory:dishCategory,
      dishRes:dishRes
    }).then((response) =>{
      console.log(response)
    })
  }


  return(
    <div className="card" style={{marginTop:"30px"}}>
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
     name="dishIngredients"
     placeholder="Ingredients"
     onChange = {
       (e) => {
         setDishIngredients(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
     type="file"
    className = "form-control"
     name="dishImg"
     placeholder="Image"
     onChange = {
       (e) => {
         setDishImg(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body file">
    <input
    type="text"
   className = "form-control"
    name="dishPrice"
    placeholder="Price of the Dish"
    onChange= { e => {
      setDishPrice(e.target.value);
    }}
    />
    </div>
    <div className="card-body">
    <input
    type="text"
    className = "form-control"
    name="dishDescription"
    placeholder="Description of the food"
    onChange= { e => {
      setDishDescription(e.target.value);
    }}
    />
    </div>
    <div className="card-body">
    <input
    type="text"
    className = "form-control"
    name="dishCategory"
    placeholder="Category of food"
    onChange= { e => {
      setDishCategory(e.target.value);
    }}
    />
    </div>
    <div className="card-body">
    <input
    type="text"
    className = "form-control"
    name="dishRes"
    placeholder="Restaurant Name"
    onChange= { e => {
      setDishRes(e.target.value);
    }}
    />
    </div>
    <button type="button" class="btn btn-outline-light" onClick={addDish}>Save Changes</button>
    </div>
  )
}


export default AddDishes;
