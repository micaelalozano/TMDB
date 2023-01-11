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

  const [clickDos, setClickDos] = useState(false);
  const handleClickDos = () => setClickDos(!clickDos);

  const [clickTres, setClickTres] = useState(false);
  const handleClickTres = () => setClickTres(!clickTres);

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

          <li onClick={handleClickDos}>
            Peliculas <span className="material-icons">expand_more</span>
            <ul className={clickDos ? "children" : "sub-menu"}>
              <Link to="/productos">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/accion">
                <li className="sub-li">Accion</li>
              </Link>
              <Link to="/sweaters">
                <li className="sub-li">Comedias</li>
              </Link>
              <Link to="/pantalones">
                <li className="sub-li">Dramas</li>
              </Link>
              <Link to="/vestidos">
                <li className="sub-li">Terror</li>
              </Link>
            </ul>
          </li>

          <li onClick={handleClickTres}>
              Series <span className="material-icons">expand_more</span>
              <ul className={clickTres ? "children" : "sub-menu"}>
              <Link to="/productos">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/accion">
                <li className="sub-li">Accion</li>
              </Link>
              <Link to="/sweaters">
                <li className="sub-li">Comedias</li>
              </Link>
              <Link to="/pantalones">
                <li className="sub-li">Dramas</li>
              </Link>
              <Link to="/vestidos">
                <li className="sub-li">Terror</li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to="/contacto">Mas populares</Link>
          </li>
        </ul>
        <div className="nav-login">
          <FavoriteBorderIcon className="nav-icon" sx={{ fontSize: 20 }} />
          <Link to="/login">
            <LoginIcon className="nav-icon" sx={{ fontSize: 20 }} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
