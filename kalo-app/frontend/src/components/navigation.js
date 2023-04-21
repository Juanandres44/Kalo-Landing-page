import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-default">
      <div className="container-fluid">
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
              <a href="#beneficios" className="page-scroll">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#funcionamiento" className="page-scroll">
                Funcionamiento
              </a>
            </li>
            <li>
              <a href="#planes" className="page-scroll">
                Planes
              </a>
            </li>
            <li>
              <a href="#talento" className="page-scroll">
                Talento
              </a>
            </li>
            <li>
              <a href="#contacto" className="page-scroll">
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
