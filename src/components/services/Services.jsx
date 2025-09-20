import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend Developer</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                prroviding quality work to clients and companies .
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I design the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">web pages development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">Project Analysis.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">Debugging and Testing.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Deployment and Maintenance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                prroviding quality work to clients and companies .
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I design the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">web pages development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">Web app design.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">Mobile app design.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-cloud edit services__icon"></i>
            <h3 className="services__title">
              Cloud <br /> Computing
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Cloud Computing</h3>
              <p className="services__modal-description">
                prroviding quality work to clients and companies .
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Client Needs Analysis.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Cloud Solution Selection.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Cloud Transformation Strategies.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Cloud Resource Management.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Optimization & Performance.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Training & Support.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
