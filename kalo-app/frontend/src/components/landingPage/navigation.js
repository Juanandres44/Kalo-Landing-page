import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" aria-current="page" href="/ ">
            kalo
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Proceso
              </a>
            </li>
            <li>
              <a href="#plan" className="page-scroll">
                Planes
              </a>
            </li>
            <li>
              <a href="#invite" className="page-scroll">
                Talento
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
            <li>
              <a href="/sign-in" className="nav-link page-scroll">
                Iniciar sesión
              </a>
            </li>
            <li>
              <a href="/sign-up" className="nav-link page-scroll">
                Registrate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
