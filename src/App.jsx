import React from "react";
import { Route, Routes } from "react-router-dom";
import Explorar from "./pages/Explorar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
