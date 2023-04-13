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

function Navbar() {
  return (
    <aside className="navbar">
      <ul className="navbar__menu">
        <div className="menu__items">
          <li className="active">
            <AiOutlineHome />
            Inicio
          </li>
          <li>
            <AiOutlineSchedule />
            Agenda
          </li>
          <li>
            <MdOutlinePets />
            Pacientes
          </li>
          <li>
            <AiOutlineTeam />
            Equipo
          </li>
          <li>
            <CiMedicalCross />
            Operacion
          </li>
          <li>
            <MdOutlineInventory2 />
            Inventario
          </li>
          <li>
            <MdOutlineSos />
            Emergencia
          </li>
          <li>
            <MdOutlinePayment />
            Cobranza
          </li>
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
