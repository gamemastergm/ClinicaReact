import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import Content from "./content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Read from "./read";
import Create from "./create";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/agendamento" exact element={<Read />} />
          <Route path="/agendamento/criar" exact element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
