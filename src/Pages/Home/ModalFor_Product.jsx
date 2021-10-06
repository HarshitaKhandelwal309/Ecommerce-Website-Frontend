import React, { useState, useEffect } from "react";

import { v1 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { toast } from 'react-toastify'; 
var date = new Date().toString().split(" ").splice(1, 3).join(" ");
console.log(date);

// dimag ka khel for open model on click the  image
var details = {
  openModal_method: undefined,
  closeModal_method: undefined,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "350px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ProductModal(props) {
  //if user is logout then he/ she will not be able to add product to wishlist
  const [checkLogin, setCheckLogin] = useState(null);

  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("token")));
  }, []);

  const history = useHistory();

  details.openModal_method = openModal;
  details.closeModal_method = closeModal;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  //this state is for wishlist
  const [individualData, setIndividualData] = React.useState({
    picture: "",
    productName: "",
    price: "",
    description: "",
    _id: "",
  });

  // add cart from modal
  const AddCart = async (id) => {
    if (!checkLogin) return history.push("/login");

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

      closeModal();

      if(response.data.code===200)
      {
        toast.success('Added To Cart !', {
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
        console.log(response.data.error)
        // alert(response.data.error)
      }
      
     
    } catch (error) {
      console.log(error.message);
      // alert(error.message)
    }
  };



















  //add to wishlist
  const AddWishlist = async (id) => {
    if (!checkLogin) return history.push("/login");

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        "http://localhost:4000/api/addWishlist/product",
        {
          product_id: id,
        },

        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.error) {

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
        console.log(response.data.error);
      } else {
        toast.success('Added To Wishlist !', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        console.log("response", response);
        closeModal();
        // alert("product add successfully");
      }

      console.log("response", response);
    } catch (error) {
      console.log(error.message);
      // alert(error.message)
      // alert("error:", error.message);
    }
  };

  function openModal(item) {
    console.log(item);
    setIndividualData({
      picture: item.picture,
      productName: item.productName,
      price: item.price,
      description: item.description,
      _id: item._id,
    });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {/* <span  onClick={openModal}>
      <i className="far fa-eye"></i>
      </span> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            outline: "none",
          }}
          onClick={closeModal}
        >
          <i className="fas fa-window-close"></i>
        </button>
        <div className="parentModal">
          <div className="child_1_for_ModalImage">
            <img src={individualData.picture} alt="img1" />
          </div>
          <div className="child_2_for_ModalImage">
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              {individualData.productName}
            </p>
            <p style={{ marginLeft: "10px" }}>{individualData.description}</p>
            <p
              style={{
                fontSize: "18px",
                marginLeft: "10px",
                color: "green",
                marginTop: "10px",
              }}
            >
              &#x20b9;{individualData.price}
            </p>
            <button
              onClick={(e) => {
                AddCart(individualData._id);
              }}
            >
              <i className="fas fa-shopping-cart"></i> Add To Cart
            </button>
            <button
              onClick={(e) => {
                AddWishlist(individualData._id);
              }}
              style={{ backgroundColor: "#FAEEE0", color: "black" }}
            >
              <i style={{ border: "black" }} className="far fa-heart "></i>{" "}
              Favorites
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export { ProductModal, details };
