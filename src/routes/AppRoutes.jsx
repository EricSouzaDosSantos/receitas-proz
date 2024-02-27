import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/cadastro";
import Nave from "../pages/Efetuado";
import Cup from "../pages/Efetuado/receitas/Cupcake";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Efetuado" element={<Nave />} />
        <Route path="/Efetuado/receitas" element={<Cup />} />
      </Routes>
    </BrowserRouter>
  );
}