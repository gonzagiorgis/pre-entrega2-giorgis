import React from "react";

const Item = ({ item }) => {
  return (
    <div
      className="card border-0 mb-1 bg-transparent"
      style={{ width: "15rem" }}
    >
      <img
        src={item.imagen}
        className="card-img-top img-item"
        alt={item.nombre}
      />
      <div className="card-body text-center">
        <p className="card-text mb-1">{item.nombre}</p>
        <p className="card-text">${item.precio}</p>
      </div>
    </div>
  );
};

export default Item;
