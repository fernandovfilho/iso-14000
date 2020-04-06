import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./styles.css";
import api from "../../services/api";

export default function ActivityList() {
  const [activities, setActivities] = useState([]);

  const loadAllActivities = async () => {
    const activities = await api.get("activities");

    setActivities(activities.data);
  };

  useEffect(() => {
    loadAllActivities();
  }, []);

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
            {activities.map((activity) => {
              return (
                <li key={activity.id}>
                  <strong className="activity-title">{activity.title}</strong>
                  <span className="activity-date">
                    {moment(activity.createdAt).format("DD/MM/YYYY HH:mm")}
                  </span>

                  <p className="activity-level">
                    <span>{activity.level}</span>
                    <span className="activity-type">
                      {activity.environment}
                    </span>
                    <span className="activity-type">
                      {activity.contaminationType} {activity.value}
                      {activity.unit}
                    </span>
                  </p>

                  <p className="activity-description">{activity.description}</p>

                  <button className="btn button-delete">
                    <FaTrashAlt color="#fff" />
                  </button>

                  <button className="btn button-edit">
                    <FaEdit color="#fff" />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
