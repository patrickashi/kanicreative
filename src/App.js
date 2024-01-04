import React from "react"
import Navbar from "./Components/Navbar";
import Secone from "./Components/Secone";
import Sectwo from "./Components/Sectwo";
import Secthree from "./Components/Secthree";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Create from "./pages/Create";
import Dashboard from "./pages/Ordersp";
import Signup from "./pages/Signup";
import Dashhome from "./pages/Dashhome";
import Ordernav from "./Components/Ordernav";
import Orders from "./Components/Orders";
import Ordersp from "./pages/Ordersp";
import Tasksp from "./pages/Tasksp";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Signup">
                <Signup />
              </Route>
              <Route path="/Ordersp">
                <Ordersp/>
              </Route>
              <Route path="/Dashhome">
                <Dashhome />
              </Route>
              <Route path="/Tasksp">
                <Tasksp />
              </Route>
              
            </Switch>
          </div>

        </div>
      </Router>
  );
}

export default App;
