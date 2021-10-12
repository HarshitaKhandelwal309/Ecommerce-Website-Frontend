import React from "react";

import Modal from "react-modal";
import categoryArray from "./categoryDataArray";

const customStyles = {
  content: {
    top: "49%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width:"450px",
    height:'600px'
  },
};



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function AddProductModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const[addProductInfo , setProductInfo] = React.useState(
  //     {
  //         productName:"",
  //         price:"",
  //         description:"",
  //     }
  // )
  
  //handle change
  const[pictureUrl,setPicture]= React.useState(
    {
      picture:""
    }
  );
  const handleChangeInProduct=(e)=>
{
    const{name,value} = e.target;
    console.log(name,value);

    props.setStateVariable({...props.StateVariable,[name]:value})

}

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
const uploadSingleFile=(e)=>
{
if(e.target.files[0])
{
  console.log(e.target.files[0])
  var reader= new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onloadend=()=>
  {
    console.log(reader.result);
    setPicture({"picture":reader.result})
    console.log("picture link:" ,pictureUrl)
   
    props.setStateVariable({...props.StateVariable,pictureUrl})
  }
}
}

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <button className="AddProduct" onClick={openModal}>
        
        <i className="fa fa-plus-circle"></i> Add Product
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button style={{float:"right",background:"transparent",border:"none",outline:"none"}} onClick={closeModal}><i className="fas fa-window-close"></i></button>
        
       
        <div className="field">
          <label className="label">Product Name</label>
          <div className="control">
            <input 
            class="input" 
            name="productName"
            type="text"
           
            placeHolder="e.g footwear"
            onChange={handleChangeInProduct}
            >
            

            </input>
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
             onChange={handleChangeInProduct}
             >
            
             </input>
          </div>
        </div>
    


        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select name="category"  onChange={handleChangeInProduct}>
              {categoryArray.map((item) => {
          return <option>{item}</option>;
        })}
                {/* <option>Fashion</option>
                <option>Footwear</option>
                <option>Home Decor</option>
                <option>Grocery</option> */}
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
              placeHolder="Lorem ipsum bla bla....."
              onChange={handleChangeInProduct}
            >

            </textarea>
          </div>
        </div>
        <div class="file is-info has-name is-fullwidth">
  <label class="file-label">
    <input class="file-input" type="file" name="resume"  onChange={uploadSingleFile}/>
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose File
      </span>
    </span>
    <span  class="file-name" >
      {/* Screen Shot 2017-07-29 at 15.54.25.png */}
    </span>
  </label>
</div>
       
          <div className="control">
           

            <button style={{marginLeft:'160px',marginTop:"30px"}} className="button is-link "
            onClick={()=>
            {
               
              
                props.addProducts(closeModal)
            }}
            >Add</button>
          
         
         
         
        </div>
      </Modal>
    </div>
  );
}
export default AddProductModal;
