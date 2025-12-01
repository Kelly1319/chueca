import React from "react";
import "../index.css"; 

function Inicio() {
  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Chueca</h1>
      <hr className="inicio-linea" />
      <main>
        <p className="inicio-parrafo">
          Somos una empresa que se encarga de realizar tus prendas desde cero,
          realizando corte y confección, con más de 10 años de trayectoria en
          Buenos Aires, usando los mejores productos del mercado.
        </p>
      </main>

      <img
        src="/img/logo.png"
        className="imagen-inicio"
        alt="Logo Chueca"
        onError={(e) => {
          e.target.style.display = "none";
          console.warn("No se pudo cargar /img/logo.png");
        }}
      />
    </div>
  );
}
