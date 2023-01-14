import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CarWidget = () => {
  const { cartTotal } = useContext(CartContext);

  if (cartTotal() === 0) {
    return "";
  } else {
    return (
      <Link
        title="Ir al carrito"
        type="button"
        className="btn btn-custom position-relative me-3 mb-3 mb-lg-0 light-shadows"
        id="cart-btn"
        to={"/cart"}
      >
        <img
          src={"/img/cart.svg"}
          alt={"Carrito de compras"}
          className="ms-auto cart-icon position-relative top-50 start-50 translate-middle"
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartTotal()}
        </span>
      </Link>
    );
  }
};

export default CarWidget;
