import React from "react";
import "./Shared/Style/App.css";

import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/primary_routes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {
  return (

    <BrowserRouter>
      <AllRoutes />
      <ToastContainer/>
    </BrowserRouter>
    
  );
}

export default App;
