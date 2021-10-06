import React from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";
import  LoaderForPages from '../../Reusable/LoaderForPages'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast } from 'react-toastify'; 

function WishlistCard(props) {
  
  console.log("product details:", props.item);
  console.log(props.item._id);

  const AddToCart = async (id) => {
    // if (!checkLogin) return history.push("/login");

    try {
      // setCheckLogin(JSON.parse(localStorage.getItem('token')))
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        "http://localhost:4000/api/place/order",
        {
          product_id: id,
          orderDate: new Date().toString().split(" ").splice(1, 3).join(" "),
          orderNumber: uuid(),
          address: null,
          //  user:JSON.parse(localStorage.getItem("userEmail"))._id
        },

        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("response", response);

      

      if(response.data.code===200)
      {
        toast.success("product added successfully !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // alert("product add successfully");
      }
      else
      {
        toast.warn(response.data.error, {
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
    } catch (error) {
      console.log(error.message);
      // alert(error.message)
    }
  };
  return (
    <>
      <div className="cards">
        <div className="order_image">
          <img src={props.item.product_id.picture} alt="imgs" />
        </div>
        <div className="order_details">
          <h1 className="product_headings">
            {props.item.product_id.productName}
          </h1>
          <p className="description">{props.item.product_id.description}</p>
          <h2 className="productPrice">
            &#x20b9;{props.item.product_id.price}
          </h2>
          <div className="orderButtons">
            <button
              className="removeBtn"
              onClick={(e) => props.DeleteWishlist(props.item._id)}
              // className={props.removeBtn}
            >
              {/* {props.RemoveButton} */}Remove
              <i
                style={{ float: "right", fontSize: "18px" }}
                className="fas fa-trash"
              ></i>
            </button>

            <button className="BagBtn"
             onClick={(e) => AddToCart(props.item.product_id._id)} 
             >
              Add To Cart
              <i
                style={{ float: "right" }}
                className="fas fa-shopping-cart"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default WishlistCard;
