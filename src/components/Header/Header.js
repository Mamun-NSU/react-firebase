import React from "react";
import { Link } from "react-router-dom";
import "./Header";

const Header = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  );
};

export default Header;
