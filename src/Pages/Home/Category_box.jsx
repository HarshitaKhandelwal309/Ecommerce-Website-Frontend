import React from "react";

const CategoryBox = (props) => {
  return (
    <>
      <div className="productDetails">
        <img 
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
