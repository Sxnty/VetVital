import React from "react";
import {
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineTeam,
} from "react-icons/ai";
import {
  MdOutlinePets,
  MdOutlineInventory2,
  MdOutlineSos,
  MdOutlinePayment,
  MdLogout,
} from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import "../../styles/components-styles/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <aside className="navbar">
      <ul className="navbar__menu">
        <div className="menu__items">
          <Link to="/">
            <li className="active">
              <AiOutlineHome />
              Inicio
            </li>
          </Link>
          <Link to="/schedule">
            <li>
              <AiOutlineSchedule />
              Agenda
            </li>
          </Link>
          <Link to="/patients">
            <li>
              <MdOutlinePets />
              Pacientes
            </li>
          </Link>
          <Link to="/team">
            <li>
              <AiOutlineTeam />
              Equipo
            </li>
          </Link>
          <Link to="/operation">
            <li>
              <CiMedicalCross />
              Operacion
            </li>
          </Link>
          <Link to="/inventory">
            <li>
              <MdOutlineInventory2 />
              Inventario
            </li>
          </Link>
          <Link to="/">
            <li>
              <MdOutlineSos />
              Emergencia
            </li>
          </Link>

          <Link to="/billing">
            <li>
              <MdOutlinePayment />
              Cobranza
            </li>
          </Link>
        </div>
        <li className="menu__logout">
          <MdLogout />
          Cerrar Sesion
        </li>
      </ul>
    </aside>
  );
}
export default Navbar;
