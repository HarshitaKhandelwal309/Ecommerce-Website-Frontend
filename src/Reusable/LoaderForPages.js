import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
// import { LoadingOverlay, Loader } from 'react-overlay-loader';


function LoaderForPages() {
    // const[isLoading,setIsLoading]=React.useState(false);

    return(
       
     
           
        <React.Fragment>
            <div className="outer_loader_div">
               <div className="loader_div">
         <Loader
                    type="Oval" color="#2874f0" height={80} width={80}
                    // position="fixed"
                    // left="300px"
                    // top="100px"
                   
                    
                    // timeout={5000000} //3 secs
                    
                  />
</div>

         </div>
        

            </React.Fragment>
    )



}
export default LoaderForPages;

 