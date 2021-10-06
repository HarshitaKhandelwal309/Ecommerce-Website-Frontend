import React from "react";
import { Link } from "react-router-dom";

function ErrorPage()
{
    return(
        <>
     <div className="errorPage">
         <div className="errorImg">
             <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="error_img" />
             <h1 style={{color:"black", fontWeight:"bold", textAlign:"center"}}>Looks like you're lost</h1>
         <p style={{textAlign:"center"}} >the page you are looking for not available!</p>
       
           
              <Link 
               style={{marginLeft:"200px", border:"none",outline:"none",marginTop:"10px"}}
            
              className="button is-primary" to="/">
                        <strong> GO TO Home</strong>
                      </Link>
                     
         </div>
         


     </div>
        </>
    )
}
export default ErrorPage;