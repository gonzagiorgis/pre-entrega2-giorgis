import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(1);
  const [stockItem, setStockItem] = useState(0);

  // no sumaba al usar useState(stock), solucione el problema inicializando stockItem con la prop stock de manera asincrónica ya que proviene de dicha forma desde ItemDetailContainer, de otra manera indicaba stockItem como undefined y no sumaba con incrementar()
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(stock);
      });
    });
    promesa.then((dato) => {
      setStockItem(dato);
    });
  }, [stock]);

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
      setStockItem(stockItem - cantidad);
      setCantidad(0);
    }
    console.log(`Agragaste ${cantidad} al carrito`);
    console.log(stockItem);
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
