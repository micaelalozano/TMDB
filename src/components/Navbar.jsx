import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "#993a3a" }} />
          ) : (
            <FaBars size={25} style={{ color: "#b34f4f" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/">
            <h1 className="logo">TMDB</h1>
          </Link>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>Peliculas</li>
          <li>
            <Link to="/acerca_de_mi">Series</Link>
          </li>
          <li>
            <Link to="/contacto">Mas populares</Link>
          </li>
        </ul>
        <div className="nav-login">
          <FavoriteBorderIcon className="nav-icon" sx={{ fontSize: 20 }}/>
          <LoginIcon className="nav-icon" sx={{ fontSize: 20 }}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
