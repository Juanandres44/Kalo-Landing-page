import React from "react";

export const Plans = () => {
  return (
    <div id="plan" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Planes</h2>
        </div>
        <div className="plan-text">
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Proyectos</h3>
                  <p class="card-text">
                    Lleva a cabo tus desarrollos o productos tech con nuestros
                    devs.
                  </p>
                  <a href="/sign-up" className="btn btn-custom btn-lg page-scroll">
                    Inscríbite aquí
                  </a>
                  <ul>
                    <li>Desarrollo Web/App</li>
                    <li>Mayor seguimiento</li>
                    <li>Garantia de resultados</li>
                    <li>Acompañamiento</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Staffing</h3>
                  <p class="card-text">
                    Tenemos el mejor equipo y talento tech remoto por horas para
                    ti.
                  </p>
                  <a href="/sign-up" className="btn btn-custom btn-lg page-scroll">
                    Inscríbite aquí
                  </a>
                  <ul>
                    <li>Talento pre filtrado</li>
                    <li>Construimos tu equipo remoto</li>
                    <li>Tu decides las horas</li>
                    <li>Variedad de perfiles tech</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Outsourcing</h3>
                  <p class="card-text">
                    Optimiza tu departamento tech y externaliza tareas o
                    procesos tech repetitivos.
                  </p>
                  <a href="/sign-up" className="btn btn-custom btn-lg page-scroll">
                    Inscríbite aquí
                  </a>
                  <ul>
                    <li>Seguimiento proyectos</li>
                    <li>Soporte y Calidad</li>
                    <li>Seguridad y Data</li>
                    <li>Otras</li>
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
