import React from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(0);
  const [stockItem, setStock] = useState(stock);

  const incrementar = () => {
    if (cantidad < stockItem) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const onAdd = () => {
    if (cantidad <= stockItem) {
      setStock(stockItem - cantidad);
      setCantidad(0);
    }
    console.log(`Agragaste ${cantidad} al carrito`);
    console.log(stock);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="btn-group col-md-2 offset-md-5"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button col-3"
            className="btn btn-outline-primary btn-counter"
            onClick={incrementar}
          >
            +
          </button>
          <button type="button" className="btn btn-outline-primary btn-counter">
            {cantidad}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-counter"
            onClick={decrementar}
          >
            -
          </button>
        </div>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-primary btn-counter col-md-4 offset-md-4 mt-3 mb-3"
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
