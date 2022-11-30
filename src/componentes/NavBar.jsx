import React from "react";
import CarWidget from "./CarWidget";

const navBar = () => {
  return (
    // <div className="container-fluid">
    //   <div className="row">
    <div className="col-11 col-lg-10 col-xl-8 m-auto">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img className="brand-icon" src="img/logosvg2.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around font-normal">
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="palas.html">
                  Palas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="remeras.html">
                  Remeras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="accesorios.html">
                  Accesorios
                </a>
              </li>
            </ul>
            <CarWidget />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-custom" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    //   </div>
    // </div>
  );
};

export default navBar;
