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
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const onAdd = () => {
    if (stockItem > 0 && cantidad <= stockItem) {
      setStock(stockItem - cantidad);
      setCantidad(0);
    }
    console.log(`Agragaste ${cantidad} al carrito`);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="btn-group col-md-2"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button col-1"
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
          className="btn btn-outline-primary btn-counter col-md-2 mt-3 "
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
