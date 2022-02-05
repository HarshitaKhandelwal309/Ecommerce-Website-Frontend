import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  //hitting api

  const signUpApi = async () => {
    setIsLoading(true);
    // console.log(signUpDetails);
    try {
      const response = await axios.post(
        "https://fashion-hub-server.herokuapp.com/api/signup?isAdmin=false",
        signUpDetails
      );
      setIsLoading(false);
      // console.log("response is" , response)
      if (response.data.error) {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        //  alert(response.data.error)
      } else {
        toast.success("Account created successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // alert("Account created successfully");
        console.log("response is", response);
        history.push("/login");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error.message);
    }
  };

  return (
    <>
      <div className="signUp_page">
        <div className="signUpImg_div">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/signup-screen-of-e-wallet-app-3323727-2791556.png" alt="signupsvg" />
        </div>
        <div className="signUpForm">
        <div id="form_area">
          <div id="signUp_fields">
            <fieldset>
              <div className="field">
                <label className="label">Name</label>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      onChange={handleChange}
                      className="input"
                      type="name"
                      name="name"
                      placeholder="Name"
                    ></input>
                    <span className="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                    {/* <span className="icon is-small is-right">
                 <i className="fas fa-check"></i>
               </span> */}
                  </p>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      onChange={handleChange}
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    ></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      onChange={handleChange}
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                    ></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      onChange={handleChange}
                      className="input"
                      type="tel"
                      name="Phone Number"
                      placeholder="Phone Number"
                    ></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-phone"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="field">
                <p className="control">
                  <button
                    className="button is-success"
                    disabled={isLoading}
                    onClick={signUpApi}
                  >
                    
                    Sign Up
                    {isLoading && (
                      <div
                        style={{ fontSize: "20px", fontWeight: "bolder" }}
                        className="loader-wrapper"
                      >
                        <div className="loader is-loading "></div>
                      </div>
                    )}
                  </button>
                </p>
                <p className="notRegister">
                  Already have an account?
                  <Link to="/login"> <strong>Login</strong></Link>
                </p>
              </div>
            </fieldset>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;

//  <div id="main_div_signup">

//        <div id="signUp-div">
//          <div id="signUp_fields">
//          <fieldset >

//  <div className="field">
//    <label className="label">Name</label>
//    <div className="field">
//              <p className="control has-icons-left has-icons-right">
//                <input onChange={handleChange}
//                  className="input"
//                  type="name"
//                  name="name"
//                  placeholder="Name"
//                ></input>
//                <span className="icon is-small is-left">
//                <i class="fa fa-user"></i>
//                </span>
{
  /* <span className="icon is-small is-right">
                 <i className="fas fa-check"></i>
               </span> */
}
//              </p>
//            </div>

//  </div>

//  <div className="field">
//    <label className="label">Email</label>
//    <div className="field">
//              <p className="control has-icons-left has-icons-right">
//                <input onChange={handleChange}
//                  className="input"
//                  type="email"
//                  name="email"
//                  placeholder="Email"
//                ></input>
//                <span className="icon is-small is-left">
//                  <i className="fas fa-envelope"></i>
//                </span>
//                <span className="icon is-small is-right">
//                  <i className="fas fa-check"></i>
//                </span>
//              </p>
//            </div>
//  </div>
//  <div className="field">
//    <label className="label">Password</label>
//    <div className="field">
//              <p className="control has-icons-left">
//                <input onChange={handleChange}
//                  className="input"
//                  type="password"
//                  name="password"
//                  placeholder="Password"
//                ></input>
//                <span className="icon is-small is-left">
//                  <i className="fas fa-lock"></i>
//                </span>
//              </p>
//            </div>
//  </div>
//  <div className="field">
//    <label className="label">Phone Number</label>
//    <div className="field">
//              <p className="control has-icons-left">
//                <input onChange={handleChange}
//                  className="input"
//                  type="tel"
//                  name="Phone Number"
//                  placeholder="Phone Number"
//                ></input>
//                <span className="icon is-small is-left">
//                  <i className="fas fa-phone"></i>
//                </span>
//              </p>
//            </div>
//  </div>
//  <div className="field">
//              <p className="control">
//                <button className="button is-success" disabled={isLoading} onClick={signUpApi}>Sign Up
//                {isLoading &&
//                    <div style={{fontSize:"20px", fontWeight:"bolder", }} className="loader-wrapper">
//                    <div   className="loader is-loading "></div>
//                    </div>

//      }

//                </button>
//              </p>
//              <p className="notRegister">Already have an account?
//              <Link to="/login">Login</Link>
//              </p>
//            </div>
//  </fieldset>
//          </div>
//        </div>
//      </div>
