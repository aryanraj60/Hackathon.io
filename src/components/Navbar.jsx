import React from "react";
import Logo from "../assests/aiLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" className="py-2 block">
      <img src={Logo} alt="Logo" className="ml-24" />
    </Link>
  );
};

export default Navbar;
