import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/heroVideo2.css";
import elvis from "../assets/elvis.mp4";

const HeroVideo2 = () => {
  return (
    <>
      <div className="hero-dos">
        <div className="mask-dos">
        <video className="into-video" src={elvis} autoPlay loop></video>
        </div>
        <div className="content-dos">
          <p>HOLA! MI NOMBRE ES MICAELA LOZANO</p>
          <h1>Full Stack Developer</h1>
          <div>
          <Link to="/proyectos" className="btn">
            PROYECTOS
          </Link>
          <Link to="/contacto" className="btn btn-light">
            CONTACTO
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroVideo2;
