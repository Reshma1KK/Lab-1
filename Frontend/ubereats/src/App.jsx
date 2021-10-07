import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import CustomerLogin from "./components/Login/CustomerLogin.jsx";
import RestaurantLogin from "./components/Login/RestaurantLogin.jsx";
import CustomerSignup from "./components/Login/CustomerSignup.jsx";
import RestaurantSignup from "./components/Login/RestaurantSignup.jsx";
import RestaurantLanding from "./components/LandingPage/RestaurantLanding.jsx"
import ProtectedRoute from "./components/LandingPage/ProtectedRoute.js";
import Edit from "./components/LandingPage/Edit.jsx"
import AddDishes from "./components/LandingPage/AddDishes.jsx"
import EditDishes from "./components/LandingPage/EditDishes.jsx"
import CustomerLandingPage from "./components/Customer/CustomerLandingPage.jsx"
import CustomerPage from "./components/Customer/CustomerPage.jsx"
import EditCustomerProfile from "./components/Customer/EditCustomerProfile.jsx"
import CustomerRestaurant from "./components/CustomerRestaurant/CustomerRestaurant.jsx"
import AddtoCart from "./components/AddtoCart/AddtoCart.jsx"
import OrderFood from "./components/PlaceOrder/OrderFood.jsx"
import Favorites from "./components/Favorites/Favorites.jsx"
import PastOrders from "./components/PastOrders/PastOrders.jsx"
import OrdersPage from "./components/RestaurantOrderPage/OrdersPage.jsx"
import DisplayProfile from "./components/RestaurantOrderPage/DisplayProfile.jsx"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/CustomerLogin" component={CustomerLogin} />
      <Route path="/RestaurantLogin" component={RestaurantLogin} />
      <Route path="/CustomerSignup" component={CustomerSignup} />
      <Route path="/RestaurantSignup" component={RestaurantSignup} />
      <ProtectedRoute exact path ="/RestaurantLanding" component={RestaurantLanding} isAuthenticated={true} />
      <Route path="/Edit" component={Edit} />
      <Route path="/AddDishes" component={AddDishes} />
      <Route path="/EditDishes" component={EditDishes} />
      <Route path="/CustomerLandingPage" component={CustomerLandingPage} />
      <Route path="/CustomerPage" component={CustomerPage} />
      <Route path="/EditCustomerProfile" component={EditCustomerProfile} />
      <Route path="/CustomerRestaurant" component={CustomerRestaurant} />
      <Route path="/AddtoCart" component={AddtoCart} />
      <Route path="/OrderFood" component={OrderFood} />
      <Route path="/Favorites" component={Favorites} />
      <Route path="/PastOrders" component={PastOrders} />
      <Route path="/OrdersPage" component={OrdersPage} />
      <Route path="/DisplayProfile" component={DisplayProfile} />
    </Switch>
  </Router>
   </div>
  );
}

export default App;
