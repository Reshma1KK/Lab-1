import React from 'react'

function NavigationBar (props) {
  return(
    <div>
    <nav className = "navbar navbar-expand-lg navbar-light bg-light" >
    <div className = "container-fluid" >
    <a className = "navbar-brand"
    href = {props.link} > < p className = "login" > {props.name} ? SignIn < /p>< /a > <
    button className = "navbar-toggler"
    type = "button"
    data-bs-toggle = "collapse"
    data-bs-target = "#navbarNavDropdown"
    aria-controls = "navbarNavDropdown"
    aria-expanded = "false"
    aria-label = "Toggle navigation" >
    <span className = "navbar-toggler-icon" > </span>
    </button >
    <div className = "collapse navbar-collapse"
    id = "navbarNavDropdown" >
    <ul className = "navbar-nav" >
    <li className = "nav-item" >
    <a className = "nav-link active"
    aria-current = "page"
    href = "http://localhost:3000/" > Home </a> </li >
    <li className = "nav-item" >
    <a className = "nav-link"
    href = "http://localhost:3000/CustomerSignup" > Customer SignUp < /a>
    </li>
    <li className = "nav-item">
    <a className = "nav-link"
    href = "http://localhost:3000/RestaurantSignup" > Restaurant SignUp < /a>
    </li>
    <li className = "nav-item dropdown" >
    </li>
    </ul>
    </div>
    </div>
    </nav>
    </div>
  );
}

export default NavigationBar;