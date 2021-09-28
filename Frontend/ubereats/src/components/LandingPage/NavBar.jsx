import React from 'react';


function NavBar() {

  return(
    <div className="restaurant-NavBar">
      <h1 className="heading-home home restuarnt">Uber <span className="heading-eats restuarnt">Eats</span> Business</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/Edit">Edit Profile</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/AddDishes">Add Dishes</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/RestaurantLanding">Profile</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/">LogOut</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
