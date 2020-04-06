import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NewActivity() {
  return (
    <div className="activity-container">
      <div className="container">
        <header>
          <div className="header-title">
            <h1>Nova atividade</h1>
            <h2>Preencha todos os dados para criar uma nova atividade.</h2>
          </div>
          <div className="header-nav">
            <Link to="/activity/new" className="navlink">
              VOLTAR
            </Link>
          </div>
        </header>
        <section></section>
      </div>
    </div>
  );
}
