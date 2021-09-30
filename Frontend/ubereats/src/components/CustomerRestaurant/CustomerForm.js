import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



function CustomerForm({dash}){


  //if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
  return(
     <div>
      <div className="container">
        <div className="card mb-12" style={{maxWidth: "5000px", objectFit:"contain"}}>
          <img src={`data:image/jpeg;base64,${dash.picture}`} className="profile-img" alt="dash-img" />
          <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
                <h5 className="card-title">{`${dash.restaurantName}`}</h5>
                <h5 className="card-text">{`${dash.location}`}</h5>
                <h5 className="card-text">{`${dash.description}`}</h5>
                <h5 className="card-text">{`${dash.contact}`}</h5>
                <h5 className="card-text"><small className="text-muted">{`${dash.timings}`}</small></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )


}










export default CustomerForm;
