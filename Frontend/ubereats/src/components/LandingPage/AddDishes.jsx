import React,{useState} from 'react'
import NavBar from "./NavBar.jsx"
import Axios from "axios";
import {Row,Col} from "react-bootstrap"
import backendServer from "../../webConfig.js";

function AddDishes() {

  var resName=(JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]);

  const[dishName,setDishName]= useState("");
  const [dishIngredients,setDishIngredients] = useState("");
  const [dishImg,setDishImg] = useState("");
  const [dishPrice,setDishPrice] = useState("");
  const [dishDescription,setDishDescription] = useState("");
  const [dishCategory,setDishCategory] = useState("");
  const [type,setType]=useState("");

  const convertBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        resolve(fileReader.result)
      };
    });
  }

  const handleImageChange = async (e) => {
    const selected=e.target.files[0];
    const base64=await convertBase64(selected);
    setDishImg(base64);
    const ALLOWED_TYPES = ["image/png","image/jpeg","image/jpg"];
    if(selected&&ALLOWED_TYPES.includes(selected.type)){
      let reader=new FileReader();
      reader.onloadend=()=>{
        setDishImg(reader.result);
      }
      reader.readAsDataURL(selected);
    }
  }

  const addDish = () => {
    Axios.post(`${backendServer}/AddDishes`,{
      dishName:dishName,
      dishIngredients:dishIngredients,
      dishImg:dishImg,
      dishPrice:dishPrice,
      dishDescription:dishDescription,
      dishCategory:dishCategory,
      resName:resName,
      type:type
    }).then((response) =>{
      console.log(response)
    }).catch(err =>{
      console.log(err);
    })
    alert("Added successfully")
    window.open("/RestaurantLanding","_self")
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
    <Row>
    <Col>
    <div className="card-body">
    <input
     type="file"
    className = "form-control"
     name="dishImg"
     placeholder="Image"
     onChange = {
       (e) => {
           handleImageChange(e);
       }
     }
    />
    </div>
    </Col>
    </Row>
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
      <div className="card-body" style={{width:"1406px",heigh:"48px"}}>
      <select
    className = "form-control"
      name="type_of_food"
      required
      onChange={
        (e)=>{
          setType(e.target.value);
        }}
      >
        <option value="select">Select</option>
        <option value="Veg">Veg</option>
        <option value="Non Veg">Non Veg</option>
        <option value="Vegan">Vegan</option>
      </select>
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
     <button type="button" class="btn btn-outline-light" onClick={addDish}>Save Changes</button>
    </div>
  )
}


export default AddDishes;
