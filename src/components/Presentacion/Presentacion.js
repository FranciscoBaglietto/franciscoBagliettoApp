import React from "react";
import "./Presentacion.css";

const Presentacion = () => {
  return (
    <div className="presentacion" >
      <div className="presentacion-titulos">
        <div className="titulos">
          <h1 className="titulos-top">Francisco Baglietto</h1>
          <h3 className="titulos-abajo">Desarrollador FrontEnd</h3>
        </div>
        <ul className="presentacion__listas">
          <li className="presentacion__listas-link"><a className="presentacion__link" href="https://www.w3schools.com">Sobre Mi</a></li>
          <li className="presentacion__listas-link"><a className="presentacion__link" href="https://www.w3schools.com">Estudios</a></li>
          <li className="presentacion__listas-link"><a className="presentacion__link" href="https://www.w3schools.com">Proyectos</a></li>
          <li className="presentacion__listas-link"><a className="presentacion__link" href="https://www.w3schools.com">Contacto</a></li>
        </ul>
      </div>

      <div className="presentacion-img">
    hola
      </div>
    </div>
  );
};

export default Presentacion;
