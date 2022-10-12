import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <h2  className="font-bold capitalize verytop">Improve coding</h2>
      <nav className="navbar">
        <Link className=" " to="/home">
          Home
        </Link>
        <Link className=" " to="/analysis">
          Analysis
        </Link>
        <Link className=" " to="/blog">
          Blog
        </Link>
      </nav>
      <div className="common-text">
        <img
          className=""
          src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <p>
          Here you can develop your skills. and in every section you will find
          some questions. You just have to give currect answer
        </p>
      </div>
    </div>
  );
};

export default NavBar;
