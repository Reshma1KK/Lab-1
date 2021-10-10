import React,{useState} from "react"
import Axios from "axios"
import {Row,Col} from "react-bootstrap";


function Location ({loc}) {

  const name = JSON.parse(localStorage["user"])[0].name;
  const [location,setLocation]=useState("")
  const [newLocation,setNewLocation]=useState("")

  const addOldAddress = () => {
    Axios.put("http://localhost:3001/AddtoCart/Old",{
      newLocation:newLocation,
      currentOrder:1
    }).then(response =>{
      console.log("Added to DB!");
    }).catch(err =>{
      console.log(err);
    })
  }
  const addNewAddress = () => {
    Axios.put("http://localhost:3001/AddtoCart/New",{
      location:location,
      currentOrder:1
    }).then(response =>{
      console.log("Added to DB!");
    }).catch(err =>{
      console.log(err);
    })
  }
return (
<>
    <Row>
    <Col>
      <div className="input-group mb-6">
        <select className="custom-select" id="inputGroupSelect02" onChange={(e) =>setNewLocation(e.target.value) }  style={{backgroundColor:"#D8E3E7",width:"90%", paddingTop:"10px",paddingBottom:"10px"}}>
        <option selected>Choose Delivery Address</option>
        <option value={loc.location}>{loc.location}</option>
        </select>
      </div>
      </Col>
      <Col>
        <button type="button" className="btn btn-success btn-md" style={{borderRadius:"20px"}} onClick={addOldAddress}>Add</button>
    </Col>
    </Row>
    <div className="padding" style={{margin:"10px"}}>
    </div>
    <Row>
      <Col>
      <input
         style={{backgroundColor:"#D8E3E7",width:"90%", paddingTop:"10px",paddingBottom:"10px"}}
         type="text"
         name="location"
         className="form-control justify-content-center rounded"
         onChange = {(e) =>{
           setLocation(e.target.value);
         }}

         />
      </Col>
      <Col>
      <button type="button" className="btn btn-success btn-md" style={{borderRadius:"20px"}} onClick={addNewAddress}>Add</button>
      </Col>
    </Row>
</>
  )

}

export default Location;
