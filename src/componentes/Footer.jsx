import React from "react";

const Footer = () => {
  return (
    <footer className="container p-0">
      <div className="row m-0">
        <div className="col-11 text-footer-brand col-sm-3 mt-3 mt-sm-0">
          Jardín Padel Club
          <div className="text-footer">
            Contáctanos
            <div>
              <img
                className="footer-icon"
                src="img/whatsapp_icon.svg"
                alt="Logo de Whatsapp"
              />
              0351 662-3136
            </div>
          </div>
        </div>
        <div className="col-11 col-sm-3 text-footer mt-3 mt-sm-0">
          Puedes seguirnos en nuestras redes sociales:
          <div className="d-flex justify-content-around d-block mt-2">
            <a
              href="https://www.facebook.com/jardinpadel/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="footer-icon me-3"
                src="img/facebook_icon.svg"
                alt="Logo de Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/jardin_padel/?hl=es"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src="img/instagram_icon.svg"
                alt="Logo de Instagram"
              />
            </a>
          </div>
        </div>
        <div className="col-11 col-sm-3 text-footer mt-3 mt-sm-0">
          Nuestros horarios de atención:
          <ul className="p-0 text-footer-small">
            <li>Lunes a Viernes 9:00 - 01:00</li>
            <li>Sábados a Domingos 9:00 - 24:00</li>
          </ul>
        </div>
        <div className="col-11 col-sm-3 text-footer mt-3 mt-sm-0">
          Ubicación:
          <div className="text-footer-small">Celso Barrios Nº 2261</div>
          <div className="text-footer-small">CP: 5000- Córdoba Capital</div>
          <div className="text-footer-small">Argentina</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
