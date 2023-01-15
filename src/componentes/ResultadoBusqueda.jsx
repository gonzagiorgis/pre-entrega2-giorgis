import { collection, getDocs, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ResultadoBusqueda = () => {
  const [items, setItems] = useState([]);
  const { buscar } = useParams();
  const [cargando, setCargando] = useState(true);
  //consulta a la colleccion en firebase por criterio de busqueda
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapShot) => {
      setItems(
        snapShot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((el) =>
            el.nombre.toUpperCase().includes(buscar.toUpperCase())
          )
      );
      setCargando(false);
    });
  }, [buscar]);

  return (
    <div className="container position-relative my-5">
      {cargando ? (
        <Loading></Loading>
      ) : items.length !== 0 ? (
        <ItemList items={items} />
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          No se encontraron resultados
        </div>
      )}
    </div>
  );
};

export default ResultadoBusqueda;
