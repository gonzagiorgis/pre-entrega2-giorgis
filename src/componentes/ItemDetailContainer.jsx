import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);

  //consulta a un documento en firebase
  useEffect(() => {
    const db = getFirestore();
    const documento = doc(db, "items", id);
    getDoc(documento).then((snapShot) => {
      if (snapShot.exists()) {
        setItem({ id: snapShot.id, ...snapShot.data() });
        setCargando(false);
      } else {
        console.log("Error no se encontró");
      }
    });
  }, [id]);

  return (
    <div className="container">
      {cargando ? <Loading></Loading> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
