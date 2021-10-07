import React from "react";
import { useHistory } from "react-router";

const CategoryBox = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="productDetails">
        <img 
        onClick={(e)=>history.push(`/category/${props.productName}`)}
          className={props.categoryProductImg}
          
          src={props.image}
          alt="images"
        />
        <p id="categories_product">{props.productName}</p>
      </div>
    </>
  );
};

export default CategoryBox;
