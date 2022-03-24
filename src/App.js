import React from "react";


import Validations from "./Validations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Time from "./Time";
function APP() {


  return (
    <>
    

{/* <Time/> */}
    <Router>
        <Routes >
          <Route path="/" element={<Validations />} />
          <Route path="/main" element={<Main />} />
       
        
        </Routes>
      </Router>
    </>
  );
}

export default APP;