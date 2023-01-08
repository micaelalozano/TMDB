import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";

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
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/proyectos">Peliculas</Link>
        </li>
        <li>
          <Link to="/acerca_de_mi">Series</Link>
        </li>
        <li>
          <Link to="/contacto">Mas populares</Link>
        </li>
      </ul>
      <Link to="/">
        <h1>TMDB</h1>
      </Link>
      <div className="nav-login">
          <p>entarr</p>
          <p>fav</p>
      </div>
      </div>
    </>
  );
};

export default Navbar;
