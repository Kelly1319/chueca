import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-seccion">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una tienda comprometida con los mejores productos y
            servicios a nuestros clientes.
          </p>
        </div>


        <div className="footer-seccion">
          <h3>Contacto</h3>
          <p>📍 Buenos Aires, Argentina</p>
          <p>📧 contacto@chueca.com</p>
          <p>📞 +54 11 5555-5555</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mi Tienda — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}