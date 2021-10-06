import React, { useEffect, useState } from "react";
import Navbar from "../../Shared/Header/navbar";
// import OrderCart from "../Order/order_card";
import WishlistCard from "./Wishlist_card";
// import dummy_order from "../../dummy/dummyorder";
import Empty from "../../Reusable/empty_cart_wish_page";
import { toast } from 'react-toastify';

import axios from "axios";
import  LoaderForPages from '../../Reusable/LoaderForPages'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import CommonButton from "../../Reusable/button_for_order_wishlist";

function Wishlist_page() {
  const[isLoading,setIsLoading]=useState(false);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    getWishlist();
  }, []);

  // get product on wishlist
  const getWishlist = async () => {
    setIsLoading(true)
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        "http://localhost:4000/api/fetchWishlist/product",

        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.data.error) {
        toast.warn(response.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

        // alert(response.data.error);
        console.log(response.data.data.error);
      } else {
        setIsLoading(false)
        // toast.success('Welcome to  Favorites !', {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   });
        //  console.log("response", response.data.data);
        setDummyData(response.data.data);

        // alert("product get  successfully");
      }
    } catch (error) {
      console.log(error.message);
      // alert("Access Denied")
      // alert("error:", "Something went wrong");
    }
  };

  // delete from wishlist
  const DeleteWishlist = async (id) => {
    console.log(id, ": product ");
    console.log(id);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.delete(
        `http://localhost:4000/api/removeWishlist/product?_id=${id}`,

        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("response", response);
      getWishlist();
      // alert("Removed from wishlist");
      toast.warn('Removed from Favorites !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  



  return (
    <>
      <Navbar />
      {isLoading ?<LoaderForPages />:
        <>
      <h1 className="heading_order">
        Favorites <i className="fas fa-heart"></i>
      </h1>
      {/* condition for rendering  */}
      {dummyData.length === 0 ? (
        <Empty
          image={"https://static.clovia.com/static/images/emptysaveLater.png"}
          heading={"Your Save for later list is empty!"}
          para={"Check out the wide range of products we offer"}
        />
      ) : (
        dummyData.map((item) => (
          <WishlistCard 
            item={item}
            DeleteWishlist={DeleteWishlist}
           
           
          />
        ))
      )}
      </>}
    </>
  );
}
export default Wishlist_page;
