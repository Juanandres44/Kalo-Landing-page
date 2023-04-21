import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/aboutUsFinal.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre nosotros</h2>
              <div className="row">
                <div className="col-md-4">
                  <h3>Nuestra visión</h3>
                  <p>
                    Ser el mayor ecosistema de desarrollo tecnológico de
                    Latinoamérica.
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>Nuestra misión</h3>
                  <p>
                    Organizar el talento tecnológico del mundo, hacerlo
                    accesible y útil para todos. Impactar a ese 70% de empresas
                    en Latam sin acceso a tech.
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>Nuestro Valor</h3>
                  <p>
                    Democratizamos el acceso a programadores y equipos en
                    tecnología.
                  </p>
                  <ul>
                    <li>De forma sencilla y por horas.</li>
                    <li>
                      En su moneda local y con precios altamente competitivos.
                    </li>
                    <li>Control y trazabilidad.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
