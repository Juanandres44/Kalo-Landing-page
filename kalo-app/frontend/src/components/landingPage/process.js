import React from "react";

export const Process = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestro Proceso</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
            <div className="col-md-6">
              <i class="fa ri-number-4"></i>
              <div className="service-desc">
                <h3>Entrega de resultados</h3>
                <p>Entregamos tu proyecto a tiempo y con los mejores resultados.</p>
              </div>
            </div>
            <div className="col-md-6">
              <i class="fa ri-number-5"></i>
              <div className="service-desc">
                <h3>Continuidad</h3>
                <p>Te presentamos alternativas para el mantenimiento, crecimiento o soporte de tu proyecto a futuro.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
