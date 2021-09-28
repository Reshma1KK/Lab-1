import React,{useState} from "react";
import Axios from "axios"
import Navbar from "./Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import CustomerProfile from "./CustomerProfile"
import CountrySelect from 'react-bootstrap-country-select';


function EditCustomerProfile() {


  const[customerName,setCustomerName]= useState("");
  const [dob,setDob] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [country,setCountry] = useState(null);
  const [nickName,setNickName] = useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");



  const editProfile = () =>{
    Axios.put("http://localhost:3001/EditCustomerProfile",{
      customerName:customerName,
      dob:dob,
      city:city,
      state:state,
      country:country,
      nickName:nickName,
      email:email,
      phone:phone
    })
  }

  return (
    <div className="card">
    <Navbar />
    <div className="card-body">
    <input
     type="text"
     className = "form-control"
     name="customerName"
     placeholder="Name"
     defaultValue={JSON.parse(localStorage.getItem("user"))[0]["name"]}
     onChange = {
       (e) => {
         setCustomerName(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
    type="date"
    className = "form-control"
    placeholder="dd-mm-yyyy"
    name="dob"
    value={CustomerProfile.dob}
    onChange = {
      (e) => {
        setDob(e.target.value);
      }
    }
     />
    </div>
    <div className="card-body">
    <input
     type="text"
    className = "form-control"
     name="city"
     placeholder="City"
     onChange = {
       (e) => {
         setCity(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <input
     type="text"
    className = "form-control"
     name="state"
     placeholder="State"
     onChange = {
       (e) => {
         setState(e.target.value);
       }
     }
    />
    </div>
    <div className="card-body">
    <CountrySelect
    value={country}
    onChange={setCountry}
    />
    </div>
    <div className="card-body">
    <input
    type="text"
    className = "form-control"
    name="email"
    placeholder="Nick Name"
    onChange= { e => {
      setNickName(e.target.value);
    }}
    />
    </div>
    <div className="card-body">
    <input
    className = "form-control"
    type="text"
    placeholder="E-Mail"
    name="email"
    onChange = {
      (e) => {
        setEmail(e.target.value);
      }
    }
     />
    </div>
    <div className="card-body">
    <input
    className = "form-control"
    placeholder="Phone Number"
    type="text"
    name="phone"
    onChange = {
      (e) => {
        setPhone(e.target.value);
      }
    }
     />
    </div>
    <button type="button" class="btn btn-outline-light" onClick={editProfile}>Save Changes</button>
  </div>
  )
}

export default EditCustomerProfile;
