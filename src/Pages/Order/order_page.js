import React,{useEffect,useState} from "react";
import Navbar from "../../Shared/Header/navbar";
import OrderCard from "./order_card";
// import dummy_order from "../../dummy/dummyorder";
import Empty from "../../Reusable/empty_cart_wish_page";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { v1 as uuid } from "uuid";
import { toast } from 'react-toastify'; 

import  LoaderForPages from '../../Reusable/LoaderForPages'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function Order_page()
{
  const[isLoading,setIsLoading]=useState(false);
    useEffect(() => {
        getOrder();
      }, []);
      const [checkLogin, setCheckLogin] = useState(null);

      useEffect(() => {
        setCheckLogin(JSON.parse(localStorage.getItem("token")));
      }, []);
      const history = useHistory();
      
    const [dummyDataCart, setDummyDataCart] = React.useState([]);
     //get product on cart
    const getOrder = async () => {
      setIsLoading(true)
        try {
          const token = JSON.parse(localStorage.getItem("token"));
          //console.log(token);
          const response = await axios.get(
            "http://localhost:4000/api/fetch/order",
    
            { headers: { Authorization: `Bearer ${token}` } }
          );
          // console.log(response.data.data)
          if((response.data.data))
          {
            setIsLoading(false)
            setDummyDataCart(response.data.data);
            // toast.success('Welcome to Bag!', {
            //   position: "top-right",
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   });
          }
          else{
        
            toast.warn(response.data.error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            throw Error(response.data.error)

          }
         
          // console.log("dummyy",dummyDataCart);  
          
        } catch (error) {
          // console.log(response.data.error);
          // alert("Access Denied")
          // alert(error.message);
        }
      };
     
  //delete product from order

  const DeleteOrder = async(id)=>
  {
    console.log(id  , ": product ")
    console.log(id);
    try{
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.delete(
        `http://localhost:4000/api/delete/order?_id=${id}`,

        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.warn('Removed from cart !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      console.log("response", response);
      getOrder();
      // alert("Removed from cart")
   

    }
    catch(error)
    {
      console.log(error.message);
    }
  }

  // add product to cart from wishlist 

  




























    return(
        <>
        <Navbar/>
        {isLoading ?<LoaderForPages />:
        <>
        
        <h1  className="heading_order">Shopping Bag <i className="fas fa-shopping-bag"></i></h1>
        
        {dummyDataCart.length===0? 
        <Empty  image={"https://cdn-icons-png.flaticon.com/128/412/412986.png"} 
        heading={"Hey!! It feels so light"}
         para={"There is nothing in your bag.Let's add some items"}  /> 
         :  dummyDataCart.map((item)=> 
         <OrderCard

         item={item} 
         DeleteOrder={DeleteOrder}
         
         
       
         
         
       
        
  
       
         


          />)
        } 

        </>}
        </>
       
    )
}
export default Order_page;