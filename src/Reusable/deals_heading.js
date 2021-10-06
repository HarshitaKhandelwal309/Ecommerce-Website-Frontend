import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router";




function DealsHeading(props) {
  const[isLoading,setIsLoading]=useState(false);
  // let { category } = useParams(); 
 

  const history = useHistory();
  return (
    <>
      <div className="Headings">
        <div className="deal_main_heading">
          <h1 className="dealsHeading">Top Deals On {props.fashionHeading}</h1>
        </div>
        <div className="deal_button">
        
        <button onClick={() => { history.push(`/category/${props.fashionHeading}`) }}>View all
      
        </button>

          
        </div>

      </div>
    
    </>
  );
}
export default DealsHeading;
