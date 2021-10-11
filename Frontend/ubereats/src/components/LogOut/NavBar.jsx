import React from 'react'

function NavBar () {
  return(
    <div className="container-fluid" style={{color:"black"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className>
        <a className="navbar-brand" href="http://52.15.59.71:3001/">Home</a>
      </div>
      <div>
        <a className="navbar-brand" href="http://52.15.59.71:3001/CustomerLogin">Have an account?Sign In</a>
      </div>
    </nav>
  </div>
  );
}

export default NavBar;
