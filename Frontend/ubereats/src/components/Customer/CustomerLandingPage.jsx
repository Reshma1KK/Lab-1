import React from 'react'
import Navbar from "./Navbar.jsx"
import RestaurantDisplay from "./RestaurantDisplay.jsx"

function CustomerLandingPage(){
  return (
      <div className="container-fluid" style={{padding:0}}>
      <Navbar />
      <RestaurantDisplay />
      </div>
  )

}

export default CustomerLandingPage;
