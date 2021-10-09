import React,{useState,Fragment} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";
import {Row,Col} from "react-bootstrap"


function Edit(){

  const[nameErr,setNameErr]=useState({});
  const[descriptionErr,setDescriptionErr]=useState({});

  const [error,setError]=useState("");
  const[newName,setNewName]= useState("");
  const [newLocation,setNewLocation] = useState("");
  const [newImg,setNewImg] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [newContact,setNewContact] = useState("");
  const [newTimings,setNewTimings] = useState("");

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
    setNewImg(base64);
    const ALLOWED_TYPES = ["image/png","image/jpeg","image/jpg"];
    if(selected&&ALLOWED_TYPES.includes(selected.type)){
      let reader=new FileReader();
      reader.onloadend=()=>{
        setNewImg(reader.result);
      }
      reader.readAsDataURL(selected);
    }
    else{
      setError(true);
      console.log("file not supported");
    }
  }

  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

  const formValidation = () => {
    const nameErr={};
    const descriptionErr={};
    let isValid=true;


    if(stringContainsNumber(newName)){
      nameErr.nameContainsNumerics="Name cannot contains numerics";
      isValid=false;
    }
    if(stringContainsNumber(newDescription)){
      descriptionErr.nameContainsNumerics="Name cannot contains numerics";
      isValid=false;
    }

    setNameErr(nameErr);
    setDescriptionErr(descriptionErr);
    return isValid;
  }





  function editRestaurantName() {
      Axios.put("http://localhost:3001/EditName",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        newName:newName
      })
      JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]=newName;
      alert("Updated successfully")
    }
  function editRestaurantLocation() {
      Axios.put("http://localhost:3001/EditLocation",
      {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        newLocation:newLocation,
      })
      alert("Updated successfully")
    }
  function editRestaurantImg() {
        Axios.put("http://localhost:3001/EditImg",
        {
          resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
          newImg:newImg
        })
        alert("Updated successfully")
      }
  function editRestaurantDescription() {
        Axios.put("http://localhost:3001/EditDescription",
        {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        newDescription:newDescription
        })
        alert("Updated successfully")
      }
  function editRestaurantContact() {
        Axios.put("http://localhost:3001/EditContact",
        {
        resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
        newContact:newContact
        })
        alert("Updated successfully")
      }
  function editRestaurantTimings() {
        Axios.put("http://localhost:3001/EditTimings",
        {
       resName:JSON.parse(localStorage.getItem("user"))[0]["restaurantName"],
       newTimings:newTimings
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
     name="newName"
     placeholder="Restaurant"
     className="form-control"
     defaultValue={JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]}
     onChange = {
       (e) => {
         setNewName(e.target.value);
       }
     }
    />
    </Col>
    <Col>
      <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editRestaurantName}>✔️</button>
      </Col>
      </Row>

      <Row style={{margin:"100px"}}>
      <Col>
      <input
       type="text"
       name="newLocation"
       placeholder="Location"
       className="form-control"
       onChange = {
         (e) => {
           setNewLocation(e.target.value);
         }
       }
      />
      </Col>
      <Col>
      <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editRestaurantLocation}>✔️</button>
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
			<button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editRestaurantImg}>✔️</button>
      </Col>
      </Row>

          <Row style={{margin:"100px"}}>
          <Col>
          <input
           type="text"
           name="newDescription"
           placeholder="Description"
           className="form-control"
           onChange = {
             (e) => {
               setNewDescription(e.target.value);
             }
           }
          />
          </Col>
          <Col>
            <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editRestaurantDescription}>✔️</button>
            </Col>
            </Row>

            <Row style={{margin:"100px"}}>
            <Col>
            <input
             type="tel"
             name="newContact"
             placeholder="Contact"
             className="form-control"
             onChange = {
               (e) => {
                 setNewContact(e.target.value);
               }
             }
            />
            </Col>
            <Col>
              <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editRestaurantContact}>✔️</button>
              </Col>
              </Row>

              <Row style={{margin:"100px"}}>
              <Col>
              <input
               type="text"
               name="newTimings"
               placeholder="Timings"
               className="form-control"
               onChange = {
                 (e) => {
                   setNewTimings(e.target.value);
                 }
               }
              />
              </Col>
              <Col>
                <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editRestaurantTimings}>✔️</button>
                </Col>
                </Row>

    </Fragment>
  );

}

export default Edit;
