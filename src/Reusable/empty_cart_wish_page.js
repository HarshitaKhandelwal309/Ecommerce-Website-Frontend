import React from "react";

import { Link } from "react-router-dom";

function Empty(props) {
  return (
    <>
      <div className="empty">
        <img src={props.image} alt="images" />
        <div className="empty_details">
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
          <button>
            <Link style={{ color: "#ff3f6c" }} to="/">
              {" "}
              Start Shopping
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Empty;
