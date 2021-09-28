import React from 'react';
import "./Navbar.css"

function NavBar() {


  return(
    <div className="restaurant-NavBar">
      <h1 className="heading-home home restuarnt">Uber <span className="heading-eats restuarnt">Eats</span></h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/CustomerLandingPage">Looking for food?</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/CustomerPage">Profile</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/">LogOut</a>
        </li>
      </ul>
    </div>
  )


}

export default NavBar;
