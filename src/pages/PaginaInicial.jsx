import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/PaginaInicial.css";
import CardFarmacia from "../components/CardFarmacia";
import catarinense from "../assets/catarinense.png";
import nissei from "../assets/nissei.png";
import panvel from "../assets/panvel.png";
import precoPopular from "../assets/precoPopular.png";
import pagueMenos from "../assets/pagueMenos.png";
import { Button } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import paracetamol from "../assets/paracetamol.png";
import CardMedicamento from "../components/CardMedicamento";

import dipirona from "../assets/medicamentos/Dipirona.jpg";
import ibuprofeno from "../assets/medicamentos/Ibuprofeno.png";
import dorflex from "../assets/medicamentos/Dorflex.jpg";
import doril from "../assets/medicamentos/Doril.jpg";
import novalgina from "../assets/medicamentos/Novalgina.png";
import buscopan from "../assets/medicamentos/Buscopan.jpg";
import fetchData from "../api/fetchData";


const medicamentos = [
  {
    id: 1,
    nome: "Paracetamol",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Paracetamol",
  },
  {
    id: 2,
    nome: "Dipirona",
    imagem: dipirona,
    dosagem: "500mg",
    href: "/Dipirona",
  },
  {
    id: 3,
    nome: "Ibuprofeno",
    imagem: ibuprofeno,
    dosagem: "500mg",
    href: "/Ibuprofeno",
  },
  {
    id: 4,
    nome: "Dorflex",
    imagem: dorflex,
    dosagem: "500mg",
    href: "/Dorflex",
  },
  {
    id: 5,
    nome: "Doril",
    imagem: doril,
    dosagem: "500mg",
    href: "/Doril",
  },
  {
    id: 6,
    nome: "Novalgina",
    imagem: novalgina,
    dosagem: "500mg",
    href: "/Novalgina",
  },
  {
    id: 7,
    nome: "Buscopan",
    imagem: buscopan,
    dosagem: "500mg",
    href: "/Buscopan",
  }
];

export default function PaginaInicial() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [medicamentosApi, setMedicamentosApi] = useState([]);
  
  async function fetchDataMed() {
    setMedicamentosApi(await fetchData());
  }

  useEffect(() => {
    fetchDataMed();
  }, []);

  const goToNextSlide = () => {
    if (currentSlide < medicamentos.length - 2) {
      setCurrentSlide(currentSlide + 1);
    }

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }
    , 500);

  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }
    , 500);
  }
  


  return (
    <div className="paginaInicial">
      <div className="buttons conteudo">
        <Button variant="light" className="button-nav">
          <div className="icon">
            <GridViewIcon
              style={{
                color: "var(--hover-color)",
                fontSize: "6rem",
                width: "2.5rem",
              }}
            />
          </div>
          <span>TODOS OS DEPARTAMENTOS</span>
        </Button>
        <Button variant="light" className="button-nav">
          <div className="icon">
            <AddIcon
              style={{
                color: "var(--hover-color)",
                fontSize: "6rem",
                width: "3rem",
              }}
            />
          </div>
          <span>MAIS BUSCADO</span>
        </Button>
        <Button variant="light" className="button-nav">
          <div className="icon">
            <AutoAwesomeMotionIcon
              style={{
                color: "var(--hover-color)",
                fontSize: "2.5rem",
                width: "3rem",
              }}
            />
          </div>
          <span>MARCAS SELECIONADAS</span>
        </Button>
        <Button variant="light" className="button-nav">
          <AddIcon
            style={{
              color: "var(--primary-color)",
              fontSize: "6rem",
              width: "3rem",
            }}
          />
          <span>FARMACIAS PRÓXIMAS</span>
        </Button>
      </div>
      <div className="farmacia conteudo">
        <h1>Principais Farmácias</h1>
        <div className="farmacias">
          <CardFarmacia imagem={catarinense} nome="Catarinense" />
          <CardFarmacia imagem={nissei} nome="Nissei" />
          <CardFarmacia imagem={panvel} nome="Panvel" />
          <CardFarmacia imagem={precoPopular} nome="Preço Popular" />
          <CardFarmacia imagem={pagueMenos} nome="Pague Menos" />
        </div>
      </div>
      <div className="medicamentos_div conteudo">
        <h1>Os Mais Buscados</h1>
        <div className="carrousel">
          <div className="button-right">
            <Button
              variant="light"
              style={{ background: "var(--secundary-color)" }}
              onClick={goToPrevSlide}
            >
              <ChevronLeftIcon style={{ color: "var(--primary-color)" }} />
            </Button>
          </div>
          <div className="medicamentos">
            {medicamentos.slice(currentSlide, currentSlide + 4).map((medicamento) => (
              <CardMedicamento
                key={medicamento.id}
                nome={medicamentosApi.find(med => med.id === medicamento.id)?.generic_name}
                imagem={medicamento.imagem}
                dosagem={medicamentosApi.find(med => med.id === medicamento.id)?.dosage_form}
                className={`card_medicamento ${animating ? "animating" : ""}`}
              />
            ))}
          </div>
          <div className="button-left">
            <Button
              variant="light"
              style={{ background: "var(--secundary-color)"}}
              onClick={goToNextSlide}
            >
              <ChevronRightIcon style={{ color: "var(--primary-color)" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
