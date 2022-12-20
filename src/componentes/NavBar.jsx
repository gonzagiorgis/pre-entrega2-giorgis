import React from "react";
import CarWidget from "./CarWidget";
import { Link, NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <div className="row m-0 nav-container sticky-top ">
      <nav className="navbar navbar-expand-lg col-11 col-lg-10 col-xl-8 m-auto">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              className="brand-icon"
              src={"/img/logosvg2.svg"}
              alt={"Logo de Jardín Padel Club"}
            />
          </Link>
          <button
            className="navbar-toggler light-shadows"
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
                <NavLink className="nav-link" aria-current="page" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"category/palas"}>
                  Palas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"category/remeras"}>
                  Remeras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"category/accesorios"}>
                  Accesorios
                </NavLink>
              </li>
            </ul>
            <CarWidget />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
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
  );
};

export default navBar;
