


import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

  return (
    <nav className="navbar">
    
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="navlink">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/servicios" className="navlink">Servicios</NavLink>
        </li>
        <li>
          <NavLink to="/productos" className="navlink">Productos</NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <div className="user-info">
              <span>Hola, {usuario.nombre}</span>
              <span>Carrito: ({carrito.length})</span>
              <button onClick={cerrarSesion}>Cerrar Sesión</button>
            </div>
          ) : (
            <NavLink to="/iniciar-sesion" className="navlink">Iniciar Sesión</NavLink>
          )}
        </li>
      </ul>

      <div className="navbar-logo">
       <a href="iniciar-sesion.jsx"> <img src="/img/logo.png" alt="Logo" className="logo" /></a>
      </div>
    </nav>
  );
}

export default Navbar;