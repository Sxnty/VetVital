import React from "react";
import "../styles/components-styles/home.scss";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { GiSittingDog } from "react-icons/gi";

function Stadistics() {
  return (
    <article className="main__stadistics">
      <div className="stadistics__box1">
        <div className="stadistics__top">
          <GiSittingDog />
          <h2>0</h2>
        </div>
        <div className="stadistics__info">
          <p>Pacientes Nuevos</p>
          <p className="p__month">Ultimos 30 días</p>
        </div>
      </div>
      <div className="stadistics__box2">
        <div className="stadistics__top">
          <GiSittingDog />
          <h2>0</h2>
        </div>
        <div className="stadistics__info">
          <p>Pacientes Totales</p>
          <p className="p__month">Ultimos 12 Meses</p>
        </div>
      </div>
      <div className="stadistics__box3">
        <div className="stadistics__top">
          <AiFillSchedule/>
          <h2>0</h2>
        </div>
        <div className="stadistics__info">
          <p>Citas De Hoy</p>
          <p className="p__month">Ultimas 24 Horas</p>
        </div>
      </div>
      <div className="stadistics__box4">
        <div className="stadistics__top">
          <AiFillSchedule/>
          <h2>0</h2>
        </div>
        <div className="stadistics__info">
          <p>Citas Totales</p>
          <p className="p__month">Ultimos 12 Meses</p>
        </div>
      </div>
    </article>
  );
}

export default Stadistics;
