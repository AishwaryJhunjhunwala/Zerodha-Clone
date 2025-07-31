import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { CookiesProvider } from "react-cookie";

import Home from "./components/Home";
import Login from "./components/Login.js";
import Signup from "./components/SignUp.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/*" element={<Home />} />
      </Routes>
      </CookiesProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

