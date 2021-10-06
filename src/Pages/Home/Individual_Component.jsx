import React, { useEffect, useState } from "react";
import Navbar from "../../Shared/Header/navbar";
import { ProductModal, details } from "./ModalFor_Product";
import axios from "axios";
import { toast } from 'react-toastify';
import  LoaderForPages from '../../Reusable/LoaderForPages'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

import { useParams } from "react-router";

function Category() {
  const [categoryProduct, setCategoryProduct] = useState([]);

  let { category } = useParams();
  const[isLoading,setIsLoading]=useState(false);

  //api call by category here
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `http://localhost:4000/api/get/product/home/${category}`
        );
        if(response.data.error)
        {
          toast.error(response.data.error , {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        }
        else
        {
          toast.success(`Welcome to Women's ${category} `, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            setIsLoading(false)
          console.log(response.data.data);
          setCategoryProduct(response.data.data);
        }
      
      } catch (error) {
        // setIsLoading(false)
        console.log("error is", error.message);
      }
    })();
  }, []);

  // var randomProduct = categoryProduct[Math.floor(Math.random()*categoryProduct.length)]

  return (
    <>
      <Navbar />
      {isLoading ?<LoaderForPages />:
      
      
     
    <div className="individualComponent">
        <h1>Women's {category}</h1>

        <div className="individualImage">
          {categoryProduct.map((item) => {
            return (
              <div className="image1">
                <ProductModal obj={item} />

                <img
                  src={item.picture}
                  alt="img1"
                  onClick={(e) => details.openModal_method(item)}
                />

                <p style={{ color: "black", fontWeight: "bolder" }}>
                  {item.productName}
                </p>
                <p>{item.description}</p>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  {" "}
                  &#x20b9;{item.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
}
    </>
  );
}
export default Category;
