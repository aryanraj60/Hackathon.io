import React from "react";
import Logo from "../assests/br3.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" className="py-2 block">
      <img src={Logo} alt="Logo" className="ml-24 w-14" />
    </Link>
  );
};

export default Navbar;
