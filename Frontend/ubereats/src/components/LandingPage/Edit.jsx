import React,{useState} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";


function Edit(){

  const [resName,setResName] = useState("");
  // const [resLocation,setResLocation] = useState("");
  // const [resImg,setResImg] = useState("");
  // const [resDescription,setResDescription] = useState("");
  // const [resContact,setResContact] = useState("");
  // const [resTimings,setResTimings] = useState("");

  const[newName,setNewName]= useState("");
  const [newLocation,setNewLocation] = useState("");
  const [newImg,setNewImg] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [newContact,setNewContact] = useState("");
  const [newTimings,setNewTimings] = useState("");

  function editName(resName) {
      Axios.put("http://localhost:3001/Edit.jsx",
        {
          resName:resName,
          newName:newName,
          // newLocation:newLocation,
          // newImg:newImg,
          // newDescription:newDescription,
          // newContact:newContact,
          // newTimings:newTimings
        })
      }
      function editLocation(resName) {
          Axios.put("http://localhost:3001/Edit.jsx",
            {
              resName:resName,
              newLocation:newLocation,
              // newLocation:newLocation,
              // newImg:newImg,
              // newDescription:newDescription,
              // newContact:newContact,
              // newTimings:newTimings
            })
          }
      function editImg(resName) {
            Axios.put("http://localhost:3001/Edit.jsx",
              {
                resName:resName,
                newImg:newImg,
                              // newLocation:newLocation,
                              // newImg:newImg,
                              // newDescription:newDescription,
                              // newContact:newContact,
                              // newTimings:newTimings
              })
      }
      function editDescription(resName) {
          Axios.put("http://localhost:3001/Edit.jsx",
            {
              resName:resName,
              newDescription:newDescription,
                // newLocation:newLocation,
                  // newImg:newImg,
                  // newDescription:newDescription,
                  // newContact:newContact,
                  // newTimings:newTimings
              })
            }
        function editContact(resName) {
          Axios.put("http://localhost:3001/Edit.jsx",
            {
              resName:resName,
              newContact:newContact,
                                    // newLocation:newLocation,
                                    // newImg:newImg,
                                    // newDescription:newDescription,
                                    // newContact:newContact,
                                    // newTimings:newTimings
            })
        }
      function editTimings(resName) {
          Axios.put("http://localhost:3001/Edit.jsx",
            {
              resName:resName,
              newTimings:newTimings,
                      // newLocation:newLocation,
                      // newImg:newImg,
                      // newDescription:newDescription,
                      // newContact:newContact,
                      // newTimings:newTimings
            })
      }



  function showInput() {
      document.getElementById('name').innerHTML = document.getElementById("res_name").value;
      document.getElementById('location').innerHTML = document.getElementById("res_location").value;
      document.getElementById('description').innerHTML = document.getElementById("res_description").value;
      document.getElementById('contact').innerHTML = document.getElementById("res_contact").value;
      document.getElementById('timings').innerHTML = document.getElementById("res_timings").value;
    }

  return(
    <div className="card">
    <NavBar />
    <div className="card-body">
    <input
     type="text"
     name="resName"
     placeholder="Restaurant Name"
     onChange = {
       (e) => {
         setResName(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
     id="res_name"
     type="text"
     name="newName"
     placeholder="Restaurant Name"
     defaultValue={JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]}
     onChange = {
       (e) => {
         setNewName(e.target.value);
       }
     }
    />
    <button type="button" class="btn btn-outline-light" onClick={()=>{editName(resName)}}>Save Changes</button>
    </div>
    <div className="card-body">
    <input
    id="res_location"
     type="text"
    className = "form-control"
     name="resLocation"
     placeholder="Restaurant Location"
     defaultValue={JSON.parse(localStorage.getItem("user"))[0]["location"]}
     onChange = {
       (e) => {
         setNewLocation(e.target.value);
       }
     }
    />
    <button type="button" class="btn btn-outline-light" onClick={()=>{editLocation(resName)}}>Save Changes</button>
    </div>
    <div className="card-body file">
    <input
    id="res_img"
    type="file"
   className = "form-control"
    name="resImg"
    onChange= { e => {
      setNewImg(e.target.value);
    }}
    />
    <button type="button" class="btn btn-outline-light" onClick={()=>{editImg(resName)}}>Save Changes</button>
    </div>
    <div className="card-body">
    <input
    id="res_description"
    type="text"
    className = "form-control"
    name="resDescription"
    placeholder="Restaurant Description"
    onChange= { e => {
      setNewDescription(e.target.value);
    }}
    />
    <button type="button" class="btn btn-outline-light" onClick={()=>{editDescription(resName)}}>Save Changes</button>
    </div>
    <div className="card-body">
    <input
    id="res_contact"
    type="text"
      className = "form-control"
    name="resContact"
    placeholder="Restaurant Contact"
    onChange= { e => {
      setNewContact(e.target.value);
    }}
    />
    <button type="button" class="btn btn-outline-light" onClick={()=>{editContact(resName)}}>Save Changes</button>
    </div>
    <div className="card-body">
    <input
    id="res_timings"
    type="text"
      className = "form-control"
    name="resTimings"
    placeholder="Restaurant Timings"
    onChange= { e => {
      setNewTimings(e.target.value);
    }}
    />
    <button type="button" class="btn btn-outline-light" onClick={()=>{editTimings(resName)}}>Save Changes</button>
    </div>
    <button type="button" class="btn btn-outline-light" onClick={showInput}>Show Details</button>
    <center>
    <div className="container-fluid">
    <p><span id="name"></span></p>
    <p><span id="location"></span></p>
    <p><span id="image"></span></p>
    <p><span id="description"></span></p>
    <p><span id="contact"></span></p>
    <p><span id="timings"></span></p>
  </div>
  </center>
  </div>


  );

}

export default Edit;
