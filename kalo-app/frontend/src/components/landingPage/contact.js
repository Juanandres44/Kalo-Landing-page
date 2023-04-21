import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contáctanos</h2>
                  <p>
                    Por favor llena este formulario y te contactaremos lo antes
                    posible.
                  </p>
                </div>
                <form name="sentMessage" validate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
                <p>
                  Al proporcionar tus datos de contacto, estás brindando tus
                  datos a kalo.tech, quien puede contactarte.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h2>kalo</h2>
                <p>La tech house que necesitas.</p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  kaloapp.co@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="terms">
                <p>&copy; 2023 kalo</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://api.whatsapp.com/message/F2TPXMV3AOPFC1?autoload=1&app_absent=0">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/message/F2TPXMV3AOPFC1?autoload=1&app_absent=0">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href= "https://www.instagram.com/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/kalo-co/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="terms">
                <p>Terminos y condiciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
