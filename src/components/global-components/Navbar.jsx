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
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const getActiveClass = (pathname, activePath) => {
    return pathname === activePath ? "active" : null;
  };

  return (
    <aside className="navbar">
      <ul className="navbar__menu">
        <div className="menu__items">
          <Link to="/">
            <li className={getActiveClass(pathname, "/")}>
              <AiOutlineHome />
              Inicio
            </li>
          </Link>
          <Link to="/schedule">
            <li className={getActiveClass(pathname, "/schedule")}>
              <AiOutlineSchedule />
              Agenda
            </li>
          </Link>
          <Link to="/patients">
            <li className={getActiveClass(pathname, "/patients")}>
              <MdOutlinePets />
              Pacientes
            </li>
          </Link>
          <Link to="/team">
            <li className={getActiveClass(pathname, "/team")}>
              <AiOutlineTeam />
              Equipo
            </li>
          </Link>
          <Link to="/operation">
            <li className={getActiveClass(pathname, "/operation")}>
              <CiMedicalCross />
              Operacion
            </li>
          </Link>
          <Link to="/inventory">
            <li className={getActiveClass(pathname, "/inventory")}>
              <MdOutlineInventory2 />
              Inventario
            </li>
          </Link>
          <Link to="/">
            <li className={getActiveClass(pathname, "/error")}>
              <MdOutlineSos />
              Emergencia
            </li>
          </Link>

          <Link to="/billing">
            <li className={getActiveClass(pathname, "/billing")}>
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
