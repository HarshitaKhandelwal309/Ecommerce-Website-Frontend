import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProductModal from "./Add_product_modal";
import EditProductModal from "./edit_modal";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
// import ErrorPage from "../../Reusable/Admin_404_page";
import { useHistory } from "react-router";
function AdminPage() {

  //initial data is nothing
  const [productData, setProductData] = useState([]);
  const [stateVariable, setStateVariable] = useState({
    productName: "",
    price: "",
    description: "",
    category:"",
    picture:""
  });

  //when component will mount first time
  useEffect(() => {
    getProducts();
  }, []);

  const history = useHistory();

  //get product logic
  const getProducts = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      // console.log(token);
      //hitting api and pass headers for token becz i used auth middleware
      const response = await axios.get(
        "https://fashion-hub-server.herokuapp.com/api/get/product",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.error) {
        
        history.push('/NotFound')
        // alert(response.data.error);
        console.log(response.data.error);
      } else {
        console.log("response", response);
        setProductData(response.data.data);
      }
 




    } catch (error) {
      console.log("error:", error.message);
      // alert("error:", error.message);
     
    }
  };

  //add product logic
  const addProducts = async (closeModal) => {
    console.log(stateVariable);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        "https://fashion-hub-server.herokuapp.com/api/add/product",
        stateVariable,
        { headers: { Authorization: `Bearer ${token}` } }
      );
         toast.success('Product Added Successfully !', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      closeModal();
      console.log("response", response);
      getProducts();
      // alert("product add successfully");
    } catch (error) {
      toast.error(error.message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      console.log("error:", error.response);
      // alert("error:", error.message);
    }
  };

  //delete product by id
  const deleteApi = async (_id) => {
    console.log(_id);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.delete(
        `https://fashion-hub-server.herokuapp.com/api/delete/product?_id=${_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.warn('Product Deleted !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      console.log("response", response);
      getProducts();
      // alert("product deleted successfully");
    } catch (error) {
      toast.error(error.message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
      console.log("error:", error.response);
      // alert("error:", error.message);
    }
  };

  //edit product by id
  const editProduct = async (closeModal, obj, _id) => {
    console.log(_id);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      // console.log( "edit tokenn is:" , token);
      // console.log(stateVariable);
      console.log("my object", obj);
      const response = await axios.patch(
        `https://fashion-hub-server.herokuapp.com/api/update/product?_id=${_id}`,
        {
          productName: obj.productName,
          price: obj.price,
          description: obj.description,
          category:obj.category,
          picture:obj.picture
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("response", response);
      closeModal();

      getProducts();
      toast.warn('Product Edited Successfully !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      // alert("product edited successfully");
    } catch (error) {
      toast.error(error.message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      console.log("error:", error.response);
      // alert("error:", error.message);
    }
  };

  return (
    <>
      <div id="admin_page">
        <div className="admin-nav">
          <h1
            style={{
              color: "white",
              marginTop: "10px",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Welcome Admin! <span style={{float:"right",marginRight:"10px"}}>  <Link className="button is-primary" to="/">
                        <strong>Home</strong>
                      </Link></span>
          </h1>
          
        </div>
        {/* use modal here */}
        <AddProductModal
          StateVariable={stateVariable}
          setStateVariable={setStateVariable}
          // addProducts={addProducts}
          addProducts={addProducts}
        />

        <table>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>

          {/* //now map data on ui becz data comes in the array form */}
          {productData && productData.length !== 0
            ? productData.map((item) => {
                return (
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>
                      <EditProductModal obj={item} editProduct={editProduct} />

                      {/* <i className="fa fa-edit" ></i> */}
                      {/* </span> */}
                    </td>
                    <td>
                      <span
                        onClick={(e) => {
                          deleteApi(item._id);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                );
              })
            : "No Data Yet!!"}
        </table>
      </div>
    </>
  );
}
export default AdminPage;
