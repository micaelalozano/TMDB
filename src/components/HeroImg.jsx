import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Estilos
import white from "../assets/white.jpg";
import "../estilos/heroimg.css";
//Material

const HeroImg = () => {
  const [user, setUser] = useState({});
  //const [log, setLog] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

/*{  useEffect(() => {
    axios
      .get(`/api/users/${user.name}`)
      .then((res) => res.data)
      .then((user) => {
        setLog(user);
      });
  }, [user.name]);

  console.log("si",log);}*/

  return (
    <>
      <div className="hero-img">
        <div className="mask-img">
          <img className="white-img" src={white} alt="fondo" />{" "}
        </div>

        <div className="content-heroimg">
          <div className="left-detalle">
            <img className="img1" src={user.imagen} alt="" />
          </div>
          <div className="right-detalle">
            <h3 className="mi_cuenta">MI CUENTA</h3>
            <p className="mis_datos">NOMBRE: {user.name} </p>
            <p className="mis_datos">APELLIDO: {user.lastname} </p>
            <p className="mis_datos">CORREO ELECTRONICO: {user.email} </p>
            <div>
              <Link to="/cambiar_foto_perfil">
                <button>Cambiar foto de perfil</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* {  <img
            className="cuenta-foto"
            src=  {user.imagen ? user.imagen : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" } 
            alt="Foto de perfil"
          />

          <div className="div-datoss">
            <div className="boxs">
              <p className="name-box">NOMBRE: {user.name}</p>
              <p className="name-box2">APELLIDO: {user.lastname}</p>
              <p className="name-box2">CORREO ELECTRONICO: {user.email} </p>
              <button onClick={handleOpen} className="btn-perfil">
                Cambiar foto de perfil
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <div className="input-imagen">
                    <p>CAMBIAR FOTO DE PERFIL</p>
                    <div>
                      <input
                        className="item-1"
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="URL imagen"
                        onChange={(e) => setImagen(e.target.value)}
                        value={imagen}
                      />
                    </div>
                    <button>Cambiar foto</button>
                  </div>
                </form>
              </Modal>
            </div>
          </div>} */

export default HeroImg;
