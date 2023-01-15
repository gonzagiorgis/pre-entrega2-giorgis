import { getFirestore, collection, addDoc } from "@firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

const CheckOut = () => {
  const { cart, sumaTotal, cartTotal, clear } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const generarOrden = () => {
    const fecha = new Date();
    const order = {
      buyer: { nombre: nombre, email: email, telefono: telefono },
      items: cart.map((item) => ({
        id: item.id,
        title: item.nombre,
        price: item.precio,
        quantity: item.cantidad,
        price_total: item.cantidad * item.precio,
      })),
      date: `${fecha.getDate()}-${
        fecha.getMonth() + 1
      }-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
      total: sumaTotal(),
      quantity: cartTotal(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((snapShot) => {
      setOrderId(snapShot.id);
      clear();
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                id="nombre"
                onInput={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>

            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su email"
                id="email"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3 mt-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su teléfono"
                id="telefono"
                onInput={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="button-agregar m-3"
                onClick={generarOrden}
              >
                Enviar orden
              </button>
              <input
                type="reset"
                value="Borrar"
                className="button-agregar m-3"
                style={{
                  backgroundColor: "#a7a7a7",
                  border: "1px solid #a7a7a7",
                }}
              />
            </div>
          </form>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <table className="table">
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="text-start align-middle">{item.nombre}</td>
                  <td className="text-center align-middle">{item.cantidad}</td>
                  <td className="text-center align-middle">
                    $ {item.precio * item.cantidad}
                  </td>
                </tr>
              ))}
              <tr>
                <td>&nbsp;</td>

                <td className="text-center align-middle">
                  <b> Suma Total:</b>
                </td>
                <td className="text-center align-middle">
                  <b>$ {sumaTotal()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {orderId ? (
            <div className="alert text-center alert-primary" role="alert">
              <h2>¡Felicitaciones!</h2>
              <p>Tu número de orden es: {orderId}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
