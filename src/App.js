import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Secone from "./Components/Secone";
import Sectwo from "./Components/Sectwo";
import Secthree from "./Components/Secthree";
import Footer from "./Components/Footer";
import Home from "./pages/Home";


import Create from "./pages/Create";
import Dashboard from "./pages/Ordersp";
import Signup from "./pages/Signup";
import Dashhome from "./pages/Dashhome";
import Ordernav from "./Components/Ordernav";
import Orders from "./Components/Orders";
import Ordersp from "./pages/Ordersp";
import Tasksp from "./pages/Tasksp";
import Login from "./Components/Login";
import Ourworkp from "./pages/Ourworkp";
import Logosp from "./pages/Logosp";
import Allp from "./pages/Allp";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route index path="/" element={<Home />}/>
              <Route path="/Signup" element={<Signup />}/>
              <Route path="/login" element={<Login />} /> 
              <Route path="/Ordersp" />
              
              {/* <Route path="/Dashhome" component={Dashhome}>
                <Dashhome/>
              </Route> */}
              <Route path="/Dashhome" element={<Dashhome />}/>

              <Route path="/Tasksp" />

              <Route path="/Ourworkp" element={<Ourworkp />}/>
              <Route path="/Logosp" element={<Logosp />} />
              <Route path="Allp" element={<Allp />} />
              
            </Routes>
          </div>

        </div>
      </Router>
  );
}

export default App;
