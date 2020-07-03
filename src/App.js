import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import AuthRoute from "./components/AuthRoute/AuthRoute.js"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js"
// import AuthNavbar from "./components/"
// import UnAuthNavbar from 
import Home from "./pages/Home.js"
// import User from "./pages/"
import Authenticate from "./pages/Authenticate.js"
import User from "./pages/User.js"
import AuthNavbar from "./components/AuthNavbar/AuthNavbar.js"
import UnAuthNavbar from "./components/UnAuthNavbar/UnAuthNavbar.js"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <AuthRoute
        path="/"
        authComponent={AuthNavbar}
        unAuthComponent={UnAuthNavbar}
        />
        <Route exact path="/" component={Home}/>
        <Route path="/authenticate" component={Authenticate}/>
        <PrivateRoute path="/users/:userId" component={User} />
        {/* <PrivateRoute path="/client" component={Client}/> */}
      </div>
    </Router>
  );
}

export default App;
