import React,{useState,Fragment} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";
import {Row,Col} from "react-bootstrap"


function EditDishes(){

  const[newDishName,setNewDishName]= useState("");
  const [newDishIngredients,setNewDishIngredients] = useState("");
  const [newDishPrice,setNewDishPrice] = useState("");
  const [newDishImg,setNewDishImg] = useState("");
  const [newDishDescription,setNewDishDescription] = useState("");
  const [newDishCategory,setNewDishCategory] = useState("");

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
    setNewDishImg(base64);
    const ALLOWED_TYPES = ["image/png","image/jpeg","image/jpg"];
    if(selected&&ALLOWED_TYPES.includes(selected.type)){
      let reader=new FileReader();
      reader.onloadend=()=>{
        setNewDishImg(reader.result);
      }
      reader.readAsDataURL(selected);
    }
  }



  function editDishName() {
      Axios.put("http://localhost:3001/EditDishName",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishName:newDishName
      })
      alert("Updated successfully")
      window.open("/RestaurantLanding","_self");
    }
    function editDishImg() {
          Axios.put("http://localhost:3001/EditDishImg",
          {
            resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
            dishName:localStorage.getItem("val"),
            newDishImg:newDishImg
          })
          alert("Updated successfully")
          window.open("/RestaurantLanding","_self");
        }

  function editDishIngredients() {
      Axios.put("http://localhost:3001/EditIngredients",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishIngredients:newDishIngredients
      })
      alert("Updated successfully")
      window.open("/RestaurantLanding","_self");
    }
  function editDishPrice() {
      Axios.put("http://localhost:3001/EditPrice",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishPrice:newDishPrice,
      })
      alert("Updated successfully")
      window.open("/RestaurantLanding","_self");
    }
  function editDishDescription() {
        Axios.put("http://localhost:3001/EditDishDescription",
        {
          resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
          dishName:localStorage.getItem("val"),
          newDishDescription:newDishDescription
        })
        alert("Updated successfully")
        window.open("/RestaurantLanding","_self");
      }
  function editDishCategory() {
        Axios.put("http://localhost:3001/EditCategory",
        {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        dishName:localStorage.getItem("val"),
        newDishCategory:newDishCategory
        })
        alert("Updated successfully")
        window.open("/RestaurantLanding","_self");
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
      type="file"
      id="fileUpload"
      className="form-control"
      placeholder="image"
      onChange={
        (e)=>
        {
          handleImageChange(e)
        }}
        />
			<span>(jpeg, jpeg or png</span>
		    )
      </Col>
      <Col>
			<button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishImg}>✔️</button>
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
