import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);

  //consulta a la colleccion en firebase
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    const q = id
      ? query(itemsCollection, where("categoria", "==", id))
      : itemsCollection;

    getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setCargando(false);
    });
  }, [id]);

  return (
    <div className="container position-relative my-5">
      {cargando ? <Loading></Loading> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
