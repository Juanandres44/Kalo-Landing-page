import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                    La tech house que necesitas
                  <span></span>
                </h1>
                <p>Optimiza tu area tech y contrata desde un developer hasta equipos dedicados tech.</p>
                <p> ¡Comienza ahora!</p>
                <a
                  href="/sign-up"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Inscribite aquí
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};