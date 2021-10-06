import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'; 
function Navbar() {
  const [checkLogin, setCheckLogin] = useState("");
  const [user, setUser] = useState("");
  

  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("token")));
    setUser(JSON.parse(localStorage.getItem("userEmail")));
  }, []);
  console.log(user);
  return (
    <>
      <div id="my_nav_bar  ">
        <nav
          className="navbar is-dark  "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href>
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="logo"
              ></img>
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              href
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div id="searchBar"></div>
            </div>

            <div className="navbar-end">
              <div id="three-button">
                <div className="navbar-item has-dropdown is-hoverable">
                {((localStorage.getItem('token'))&& user?.role ==='USER')?
                  
                    <>
                      <a className="navbar-link" href>
                        More
                      </a>

                      <div className="navbar-dropdown">
                        <Link className="navbar-item" to="/">
                          Home
                        </Link>
                        <Link className="navbar-item" to="/favorites">
                          Favorites
                        </Link>
                        <a className="navbar-item" href>
                          Profile
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item" href>
                          Report an issue
                        </a>
                      </div>
                    </>
                    :""
}
                </div>

                <div className="navbar-item">
                  <div className="buttons">
                  {!(localStorage.getItem('token'))? 
                      <>
                        <Link className="button is-primary" to="/login">
                          <strong>Log in</strong>
                        </Link>
                        <Link className="button is-primary" to="/signup">
                          <strong>Sign Up</strong>
                        </Link>
                      </> :" "
                  }

                    {(localStorage.getItem('token'))? 
                    <Link
                      className="button is-primary"
                      to="/"
                      onClick={() => {
                        localStorage.clear();
                        setUser(null);
                        toast.success('Logout Successfully!', {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          })
                        // user(null);
                      }}
                      
                    >
                      <strong>Log Out</strong>
                    </Link>
                    : " "
                   
                    }
                  
                    
                    {user?.role === "ADMIN" && (
                      <Link className="button is-primary" to="/admin">
                        <strong>Admin</strong>
                      </Link>
                    )}

                      {((localStorage.getItem('token')) && user?.role==='USER')? 
                      <Link className="button is-light" to="/myOrders">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                          :" "
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
