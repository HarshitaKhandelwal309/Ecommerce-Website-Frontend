import {React , useState} from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import LoaderForPages from "../../Reusable/LoaderForPages";

function Login() {

  const[isLoading,setIsLoading]=useState(false);
  const history = useHistory(); // call useHistory hook
 // storing initial empty data in state
 const[loginDetails , setLoginDetails]=  useState(
   {
     email:"",
     password:""

   }
 )

 // validation state
//  const [errorValidate, setErrorValidate] = useState(false);

// handle change 
const handleChange =(e)=>
{
    const{name,value}= e.target;
    setLoginDetails({...loginDetails,[name]:value});
   
}

   



// console.log(loginD

//hitting api
const loginApi= async()=>
{
    // console.log(loginDetails)
  
      setIsLoading(true)
    
    try{
      const response = await axios.post
      ("https://fashion-hub-server.herokuapp.com//api/signin",loginDetails);
   
      setIsLoading(false)
    
      
      
      if( response.data.error)
      {
        // throw new Error(response.data.error)
        toast.error(response.data.error , {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

        // alert(response.data.error)
      }
      else
      {
        toast.success('Login Successfully!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

        console.log("response is" , response);
       
        //save user and token in local storage
        localStorage.setItem('userEmail', JSON.stringify(response.data.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        // after login if role is user then it will go on home page and if admin then will go on admin page
        if(response.data.data.user.role==="ADMIN")
        {
               history.push("/admin")
        }
        else
        {
          history.push("/")
        }
       
      }


    
    }
      
    catch(error)
    {
      setIsLoading(false)
      console.log("error" , error.message);
    }

    
   
}

  return (
    <>
    <div className="signUp_page">
      <div className="signUpImg_div">
      <img style={{width:"500px",height:"500px",marginTop:"30px", marginLeft:"50px"}}
            
           
           src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
           
           alt="login-page"
          />

      </div>
      <div className="signUpForm">
              <div id="login-fields">
       
                  <div className="field">
                  <p className="control has-icons-left has-icons-right">
                     <input onChange={handleChange}
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
                    {/* {errorValidate? "invalid email" : ""} */}
                    
                   </p>
                 </div>
              
                 <div className="field">
                   <p className="control has-icons-left">
                     <input  onChange={handleChange}
                       className="input"
                       type="password"
                       name="password"
                       placeholder="Password"
                     ></input>
                     <span className="icon is-small is-left">
                       <i className="fas fa-lock"></i>
                     </span>
                     {/* {errorValidate? "password length must be greater than 3" : ""} */}
                   </p>
                 </div>
                 <div className="field">
                   <p className="control">
                     <button className="button is-success" disabled={isLoading} onClick={loginApi}>Login { ""}    
                     {isLoading &&
                            <div style={{fontSize:"20px", fontWeight:"bolder", }} className="loader-wrapper">
                            <div   className="loader is-loading "></div>
                            </div>
                           
              }
                         </button>
                      
                   </p>
          
                   <p className="notRegister">No Account? 
                   <Link to="/signup"> <strong>Sign Up</strong></Link>
                   </p>
                 </div>
      </div>

    </div>
    </div>

     
      
    </>
  );
}
export default Login;   


// {/* <div  id="inner-div">
        
     
     
     
  
//         <div className="left-div">
//         <div id="loginImg">
//           <img
//             className="login-img"
           
//            src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
//             alt="login-page"
//           />
//         </div>
//       </div>
 
      
//       <div className="right-div">
         
//         <div id="login-fields">
       
//           <div className="field">
//             <p className="control has-icons-left has-icons-right">
//               <input onChange={handleChange}
//                 className="input"
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//               ></input>
//               <span className="icon is-small is-left">
//                 <i className="fas fa-envelope"></i>
//               </span>
//               <span className="icon is-small is-right">
//                 <i className="fas fa-check"></i>
//               </span>
//             </p>
//           </div>
       
//           <div className="field">
//             <p className="control has-icons-left">
//               <input  onChange={handleChange}
//                 className="input"
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//               ></input>
//               <span className="icon is-small is-left">
//                 <i className="fas fa-lock"></i>
//               </span>
//             </p>
//           </div>
//           <div className="field">
//             <p className="control">
//               <button className="button is-success" disabled={isLoading} onClick={loginApi}>Login { ""}    
//               {isLoading &&
//                      <div style={{fontSize:"20px", fontWeight:"bolder", }} className="loader-wrapper">
//                      <div   className="loader is-loading "></div>
//                      </div>
                    
//        }
//                   </button>
               
//             </p>
   
//             <p className="notRegister">No Account? 
//             <Link to="/signup">Sign Up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
 
      
         
        
//        </div> */}