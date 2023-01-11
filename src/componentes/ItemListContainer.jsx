import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? arrayProductos.filter((item) => item.categoria === id)
            : arrayProductos
        );
      }, 1000);
    });

    promesa.then((dato) => {
      setItems(dato);
    });
  }, [id]);

  return (
    <div className="container position-relative my-5">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
