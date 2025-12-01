import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <>
    <h1>Servicios</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

        <p>Somos una fábrica textil especializada en la producción integral de prendas femeninas, brindando un servicio profesional y altamente calificado en cada etapa del proceso. Nuestro trabajo comienza con el desarrollo de moldería por talles, adaptada a las necesidades específicas de cada marca para garantizar calce, comodidad y uniformidad en todas las prendas. </p>

        <p>Contamos con servicio de tizada y corte, optimizando el uso de materiales para lograr eficiencia y precisión. El cliente puede optar por utilizar nuestras telas o aportar su propia materia prima, asegurando flexibilidad y adaptación a diferentes líneas de diseño.</p>

        <p>Nuestro equipo de confección se encarga de transformar cada pieza en una prenda terminada, manteniendo altos estándares de calidad y control en cada fase. Además, ofrecemos servicios complementarios de etiquetado, emperchado y empaquetado, dejando los productos listos para su presentación y venta.</p>

        <p>Finalmente, disponemos de un sistema organizado de distribución, que garantiza entregas puntuales y en perfectas condiciones. De esta manera, acompañamos a cada cliente durante todo el proceso productivo, ofreciendo soluciones completas, eficientes y confiables para marcas que buscan profesionalismo y excelencia en el rubro textil.</p>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Servicios