import React,{useState,Fragment} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";
import {Row,Col} from "react-bootstrap"


function Edit(){


  const[newName,setNewName]= useState("");
  const [newLocation,setNewLocation] = useState("");
  const [newImg,setNewImg] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [newContact,setNewContact] = useState("");
  const [newTimings,setNewTimings] = useState("");


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
         name="newImg"
         placeholder="Image"
         className="form-control"
         onChange = {
           (e) => {
             setNewImg(e.target.value);
           }
         }
        />
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
             type="text"
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
