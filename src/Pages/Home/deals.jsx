import React, { useEffect, useState } from "react";
import DealsHeading from "../../Reusable/deals_heading";
import Box from "../../Reusable/Box";
// import myDeals from "../../dummy/dummydeals";
import axios from "axios";
import  LoaderForPages from '../../Reusable/LoaderForPages'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function Deals(props) {
  const[isLoading,setIsLoading]=useState(false);
  
  const [productCategory, setProductCategory] = useState([]);

  let slicedArray = productCategory.slice(0, 5);

  //api call by category here
  useEffect(() => {

    (async () => {
    
        setIsLoading(true)
      try {
        const response = await axios.get(
          `http://localhost:4000/api/get/product/home/${props.category}`
        );
        setIsLoading(false)
        console.log(response.data.data);
        setProductCategory(response.data.data);
      } catch (error) {
        console.log("error is", error.message);
      }
    })();
  }, []);

  return (
    <>
      <div id="deals_white_box">
       
        {isLoading ?<LoaderForPages/> :
        <>
        <DealsHeading fashionHeading={props.category} />
        <div style={{ height: "10px", width: "100%" }}>
          <hr style={{ backgroundColor: "lightgray" }} />
        </div>

        <div className="archit">
          {slicedArray.map((item) => (
            <Box item={item} />
          ))}
        </div>
</>
        }
        
      </div>
    </>
  );
}
export default Deals;
