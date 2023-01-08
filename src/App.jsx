import React from "react";
import { Route, Routes } from "react-router-dom";
import Explorar from "./pages/Explorar";
import Inicio from "./pages/Inicio";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<Explorar />} />
      </Routes>
    </>
  );
};

export default App;
