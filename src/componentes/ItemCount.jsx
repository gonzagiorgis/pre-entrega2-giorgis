import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(0);
  const [stockItem, setStockItem] = useState(0);
  const [vendido, setVendido] = useState(false);

  useEffect(() => {
    setStockItem(stock);
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

  const addToCart = (cantidad) => {
    if (cantidad <= stockItem) {
      setStockItem(stockItem - cantidad);
      onAdd(cantidad);
      setVendido(true);
    }
    setCantidad(0);
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
            onClick={decrementar}
          >
            -
          </button>
          <button type="button" className="btn btn-outline-primary btn-counter">
            {cantidad}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-counter"
            onClick={incrementar}
          >
            +
          </button>
        </div>
      </div>
      <div className="row">
        {vendido ? (
          <Link
            to={"/cart"}
            type="button"
            className="button-agregar col-md-4 offset-md-4 mt-3 mb-3"
            style={{
              backgroundColor: "#F7B64F",
              border: "1px solid #F7B64F",
            }}
          >
            Teminar la compra
          </Link>
        ) : (
          <button
            type="button"
            className="button-agregar col-md-4 offset-md-4 mt-3 mb-3"
            onClick={() => {
              cantidad > 0
                ? addToCart(cantidad)
                : alert("Debe ingresar la cantidad del producto");
            }}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
