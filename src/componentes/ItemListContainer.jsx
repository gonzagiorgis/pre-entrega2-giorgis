import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos);
      }, 2000);
    });

    promesa.then((dato) => {
      setItems(dato);
    });
  }, []);

  return (
    <div className="container position-relative">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
