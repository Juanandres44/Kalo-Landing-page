import React from "react";

export const Invite = () => {
  return (
    <div id="invite">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="invite-text">
              <h2>Developer, te invitamos a hacer parte del ecosistema tech más grande de Latam.</h2>
              <div className="row">
                <div className="col">
                  <h3>Perfiles</h3>
                  <p>
                    ¡Únete a nuestra comunidad de desarrolladores sin importar cuál sea tu especialidad! Cada habilidad en tecnología es valiosa para nosotros.
                  </p>
                  <ul>
                    <li>Full Stack Dev</li>
                    <li>Front / BackEnd Dev</li>
                    <li>No Code</li>
                    <li>DevOps</li>
                    <li>Software Architect</li>
                    <li>Data Scientist/Architect</li>
                  </ul>
                  <p>¡Y muchas más!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/techTools.png" className="img-responsive" alt="" />{" "}
            <a
                  href="/sign-up"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Inscribite aquí
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};
