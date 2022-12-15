import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4 text-center text-basic">
        <img
          src={item.imagen}
          className="rounded-1 mb-2 img-item"
          alt={item.nombre}
        />
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>
          <b className="text-precio">${item.precio}</b>
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
