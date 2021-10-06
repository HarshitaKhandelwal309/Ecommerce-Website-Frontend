import React from "react"; 
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/login_page";
import SignUp from "../Pages/Signup/signup_page"
import Order_page from "../Pages/Order/order_page"
import Wishlist_page from "../Pages/wishlist/wishlist_page";
import AdminPage from "../Pages/Admin-Home/Admin_page";
import Category from "../Pages/Home/Individual_Component";


import {Switch ,Route} from 'react-router-dom';
import ErrorPage from "../Reusable/Admin_404_page";
function AllRoutes()
{
    return(
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route  path ="/login" component={Login} />
            <Route  path ="/signup" component={ SignUp} />
            <Route  path ="/myOrders" component={Order_page} />
            <Route  path ="/favorites" component={Wishlist_page} />
            <Route  path ="/admin" component={AdminPage} />
            <Route  path ="/category/:category" component={Category} />
            <Route path = "/NotFound" component={ErrorPage}/>

            
          </Switch>

    )
}
export default AllRoutes;