const express = require("express");
const { generateToken, validateToken } = require("../utils/tokens"); //Para poder hacer el login con Auth
const { validateAuth } = require("../middlewares/auth");
const { Users } = require("../models");
const router = express.Router();

//Crear usuario:
router.post("/", (req, res) => {
  const { name, lastname, email, password, imagen } = req.body;
  Users.create({ name, lastname, email, password, imagen }).then((data) => {
    res.status(201).send(data);
  });
});

//Buscar todos los usuarios:
router.get("/", (req, res) => {
  Users.findAll().then((data) => {
    res.status(200).send(data);
  });
});

//Actualizar usuarios:
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, imagen } = req.body;

  Users.update({ name, lastname, email, imagen }, { where: { id } }).then(
    (data) => {
      res.status(200).send(data);
    }
  );
});

//Eliminar usuarios:
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.destroy({ where: { id } }).then((data) => {
    res.send("Eliminado");
  });
});

module.exports = router;
