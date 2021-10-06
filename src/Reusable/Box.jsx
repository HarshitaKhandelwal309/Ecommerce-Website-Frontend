import React from "react";
const Box = (props)=>
{

    console.log("props data",props.item);

    return(
        <>
        <div className="productDetails"> 
            <img className="cardImg"  src={props.item.picture} alt="images" />
            <p id ="categories_product">{props.item.productName}</p>
            <p id="price">&#x20b9;{props.item.price}</p>
        </div>
        </>
    )
}

export default Box;