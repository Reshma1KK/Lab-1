import React,{useState,useEffect,Fragment} from 'react'
import Axios from "axios"
import Location from "./Location.js"
import backendServer from "../../webConfig.js";

  function DropdownLocation () {


    const [allValues,getAllValues]=useState("");

  const name = JSON.parse(localStorage["user"])[0].name;

  useEffect(() => {
    getAllLocation();
  },[]);


const getAllLocation = () =>{
  Axios.get(`${backendServer}/GetLocation`)
  .then((response) =>{
    const allLoc=response.data.details;
    allLoc.map((loc) =>
    (JSON.parse(localStorage["user"])[0].name===loc.customer_name) ? getAllValues(loc) : ""
  )

}).catch(error =>
console.error(error));
}



    return (
  <>
  <Fragment key={allValues.id}>
          <Location loc={allValues} />
  </Fragment>
  </>


    )
}

export default DropdownLocation;
