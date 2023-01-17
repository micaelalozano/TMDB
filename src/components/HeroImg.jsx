import React, { useState, useEffect } from "react";
import axios from "axios";
//Estilos
import white from "../assets/white.jpg";
import "../estilos/heroimg.css";

const HeroImg = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);
  console.log(user);

  return (
    <>
      <div className="hero-img">
        <div className="mask-img">
          <img className="white-img" src={white} alt="fondo" />{" "}
        </div>
        <div className="content-heroimg">
          <img
            className="cuenta-foto"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Foto de perfil"
          />

          <div className="div-datoss">
            <div className="boxs">
              <p className="name-box">NOMBRE: {user.name}</p>
              <p className="name-box2">APELLIDO: {user.lastname}</p>
              <p className="name-box2">CORREO ELECTRONICO: {user.email} </p>
              <button className="btn-perfil">Cambiar foto de perfil</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
