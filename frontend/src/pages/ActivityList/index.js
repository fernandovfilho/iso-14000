import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./styles.css";

export default function ActivityList() {
  return (
    <div className="activity-container">
      <div className="container">
        <header>
          <div className="header-title">
            <h1>ISO 14000</h1>
            <h2>Controle de atividades que possuem impacto ambiental.</h2>
          </div>
          <div className="header-nav">
            <Link to="/activity/new" className="button">
              NOVA ATIVIDADE
            </Link>
          </div>
        </header>
        <section>
          <ul>
            <li>
              <strong className="activity-title">Concrete Production</strong>
              <span className="activity-date">04/04/2020</span>

              <p className="activity-level">
                <span>high</span>
                <span className="activity-type">water</span>
                <span className="activity-type">Poison 3kg</span>
              </p>

              <p className="activity-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <button className="button-delete">
                <FaTrashAlt color="#fff" />
              </button>

              <button className="button-edit">
                <FaEdit color="#fff" />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
