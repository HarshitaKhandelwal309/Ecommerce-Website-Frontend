import React from "react";

import Modal from "react-modal";
import categoryArray from "./categoryDataArray";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditProductModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [editProductInfo, setEditProductInfo] = React.useState({
    productName: props.obj.productName,
    price: props.obj.price,
    description: props.obj.description,
    category: props.obj.category,
    picture: props.obj.picture,
  });

  //handle change

  const handleChangeInProduct = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setEditProductInfo({ ...editProductInfo, [name]: value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {/* <button onClick={openModal}> */}

      <span onClick={openModal}>
        <i className="fas fa-edit"></i>
      </span>
      {/* <i className="fa fa-edit" onClick={openModal}></i> */}
      {/* </button> */}
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

        <div className="field">
          <label className="label">Product Name</label>
          <div className="control">
            <input
              class="input"
              name="productName"
              type="text"
              placeHolder="e.g footwear"
              value={editProductInfo.productName}
              onChange={(e) => {
                handleChangeInProduct(e);
              }}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              class="input"
              type="number"
              name="price"
              placeHolder="e.g 500"
              value={editProductInfo.price}
              onChange={(e) => {
                handleChangeInProduct(e);
              }}
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Image Link</label>
          <div className="control">
            <input
              class="input"
              type="text"
              name="picture"
              placeHolder="e.g https://cdn.pixabay.com/photo/2019/05/23/13/11/headphones-4223911__34.jpg"
              value={editProductInfo.picture}
              onChange={(e) => {
                handleChangeInProduct(e);
              }}
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select
                name="category"
                value={editProductInfo.category}
                onChange={(e) => {
                  handleChangeInProduct(e);
                }}
              >
                {categoryArray.map((item) => {
                  return <option>{item}</option>;
                })}

                {/* <option  >Fashion</option>
                <option >Footwear</option>
                <option  >Home Decor</option>
                <option  >Grocery</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              class="textarea"
              name="description"
              value={editProductInfo.description}
              placeHolder="Lorem ipsum bla bla....."
              onChange={(e) => {
                handleChangeInProduct(e);
              }}
            ></textarea>
          </div>
        </div>

        <div className="control">
          <button
            style={{ marginLeft: "160px" }}
            className="button is-link "
            onClick={() => {
              console.log(props.obj);
              props.editProduct(closeModal, editProductInfo, props.obj._id);
            }}
          >
            Edit
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default EditProductModal;
