import React,{useState} from 'react'
import Axios from "axios"

function DeliveryTakeAway() {

  const[status,setStatus]=useState(null);

  const storeStatus = () => {
    Axios.post("http://localhost:3001/AddtoCart/DeliveryStatus",{
      status:status,
      currentOrder:1
    })

  }

    return (
      <>
        <div className="row" style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px", marginTop:"90px"}}>
        <select
        className="form-value"
        name="delivery"
        style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"200px"}}
        required
        onChange={
          (e)=>{
            setStatus(e.target.value);
          }}
        >
          <option value="select">Select</option>
          <option value="Delivery">Delivery</option>
          <option value="Pickup">Pickup</option>
        </select>
        </div>
            <div className="padding">
            <button type="button" style={{borderRadius:"100%",backgroundColor:"green"}} onClick={storeStatus}>✔️</button>
            </div>
            <div className="padding">
            </div>
        </>
    )
}

export default DeliveryTakeAway;
