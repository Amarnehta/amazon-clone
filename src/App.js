import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Checkout from "./checkout";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";




function App() {
  const [{},dispatch] = useStateValue();
  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('thi user is',authUser );

      if (authUser) {

        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Header />    
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
