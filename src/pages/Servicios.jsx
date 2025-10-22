import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <div>
        <h1>Servicios</h1>
        <hr />
        <ul>
          <li>Molderia</li>
          <li>Corte</li>
          <li>Cofeccion</li>
          <li>Etiquetado</li>
          <li>Empacado</li>
          <li>Despacho</li>
        </ul>
        <Link to="/"><button>Volver al Inicio</button></Link>

    </div>
  )
}

export default Servicios