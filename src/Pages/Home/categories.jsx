import React from "react";
import Wishes from "../../dummy/dummynav.js";
import CategoryBox from "./Category_box.jsx";
function Categories() {
  return (
    <>
      <div id="categories">
        {Wishes.map((obj) => (
          <CategoryBox
            
            image={obj.image}
            productName={obj.product_name}
            categoryProductImg={"catImg"}
          />
          
        ))}
      </div>
    </>
  );
}
export default Categories;
