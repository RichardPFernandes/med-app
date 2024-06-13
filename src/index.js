import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PaginaInicial from "./pages/PaginaInicial";
import BuscaMedicamento from "./pages/BuscaMedicamento";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Medicamento from "./components/Medicamento";

import paracetamol from "./assets/paracetamol.png";
import dorflex from "./assets/medicamentos/Dorflex.jpg";
import buscopan from "./assets/medicamentos/Buscopan.jpg";
import dipirona from "./assets/medicamentos/Dipirona.jpg"
import novalgina from "./assets/medicamentos/Novalgina.png"
import ibuprofeno from "./assets/medicamentos/Ibuprofeno.png"
import doril from "./assets/medicamentos/Doril.jpg"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./pages/Form";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
  },
  {
    path: "/Medicamentos",
    element: <BuscaMedicamento />,
  },
  {
    path: "/CadastroMedicamentos",
    element: <Form />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
