import { collection, getDocs, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
        <div className="d-flex flex-column align-items-center mt-3">
          <div className="col-6 text-center alert alert-warning" role="alert">
            No se encontraron resultados.
          </div>
          <Link
            title="Volver a inicio"
            to={"/"}
            type="button"
            className="button-agregar col-md-3 mt-1 mb-3"
          >
            Volver a inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResultadoBusqueda;
