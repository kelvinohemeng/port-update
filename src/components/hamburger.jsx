import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hamburger({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // if (isOpen) {
    //   closeNav();
    // }
  };
  return (
    <div className="hamburger-menu">
      <div></div>
      <div
        className={`burger-toggle ${
          !isOpen ? "hamburger-open" : "hamburger-close"
        }`}
        onClick={toggleMenu}
      >
        <div className="hamburger-span "></div>
        <div className="hamburger-span "></div>
      </div>
    </div>
  );
}
