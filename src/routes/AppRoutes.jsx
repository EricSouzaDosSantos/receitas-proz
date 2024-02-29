import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/cadastro";
import Nave from "../pages/Efetuado";
import Pascoa from "../pages/receitas/Pascoa/Pascoa";
import Cup from "../pages/receitas/Cupcake/Cupcake";
import Ham from "../pages/receitas/Hamburguer/Hamburguer";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Efetuado" element={<Nave />} />
        <Route path="/receitas/Cupcake" element={<Cup />} />
        <Route path="/receitas/Hamburguer" element={<Ham />} />
        <Route path="/receitas/Pascoa" element={<Pascoa />} />


      </Routes>
    </BrowserRouter>
  );
}