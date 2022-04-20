<<<<<<< HEAD
import React from 'react';
import './App.css';
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
>>>>>>> 1b0eb57d0ab3e2ca6b8fe1b720c7d53a97ac01cf

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
