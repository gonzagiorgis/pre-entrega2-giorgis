import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4 text-center text-basic mt-3 mb-4">
        <img src={item.imagen} className="rounded-1 mb-2" alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>
          <b className="text-precio">${item.precio}</b>
        </p>
      </div>
      <ItemCount stock={item.stock} />
    </div>
  );
};

export default ItemDetail;
