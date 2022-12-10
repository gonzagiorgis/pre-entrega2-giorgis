import React from "react";

const CarWidget = () => {
  return (
    <button
      type="button"
      className="btn btn-custom position-relative me-3 mb-3 mb-lg-0"
      id="cart-btn"
    >
      <img
        src={"img/cart.svg"}
        alt="Carrito de compras"
        className="ms-auto cart-icon position-relative top-50 start-50 translate-middle"
      />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        1+
      </span>
    </button>
  );
};

export default CarWidget;
