import React from "react";

// // document.write(today);

function OrderCard(props) {
   console.log("product details:",props.item);
   var dataOrder = props.item.product_id;
  // console.log(props.item.product_id.picture);
  // console.log(props.item.product_id.productName);
  // console.log(props.item.product_id.price);
  return (
    <>
      <div className="cards">
        <div className="order_image">
          <img src={dataOrder.picture} alt="imgs" />
        </div>

        <div className="order_cart_details">
          <button
            onClick={(e) => props.DeleteOrder(props.item._id)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              float: "right",
            }}
          >
            <i className="fas fa-window-close"></i>
          </button>

          <h1 className="order_headings">
            <span style={{ color: "black", fontWeight: "bold" }}>
              Product:{""}
            </span>
            {props.item.product_id.productName}
          </h1>
          <p className="order_description">
            <span style={{ color: "black", fontWeight: "bold" }}>
              Description:{" "}
            </span>

            {props.item.product_id.description}
          </p>
          <p className="order_price">
            <span style={{ color: "black", fontWeight: "bold" }}>Price: </span>
            &#x20b9;{props.item.product_id.price}
          </p>
          <p className="order_orderNumber">
            <span style={{ color: "black", fontWeight: "bold" }}>
              Transaction ID:{" "}
            </span>

            {props.item.orderNumber}
          </p>
          <p className="order_date">
            <span style={{ color: "black", fontWeight: "bold" }}>
              Order Date:{" "}
            </span>

            {props.item.orderDate}
          </p>

          {/* <div className="orderButtons">
            <button
              style={{ marginLeft: "50px", marginTop: "30px" , backgroundColor:"#DA0037" , color:"white"}}
              className="removeBtn"
            >
            
              Remove
              <i
                style={{ float: "right", fontSize: "18px" }}
                className="fas fa-trash"
              ></i>
            </button>

          
          </div> */}
        </div>
      </div>
    </>
  );
}
export default OrderCard;
