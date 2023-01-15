import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clear, sumaTotal, cartTotal } =
    useContext(CartContext);

  return (
    <div className="container">
      <div className="row">
        {cartTotal() === 0 ? (
          <div className="d-flex flex-column align-items-center mt-3">
            <div className="col-6 text-center alert alert-warning" role="alert">
              El carrito se encuentra vacío.
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
        ) : (
          <div className="col-12 text-center">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">
                    <Link
                      title="Vaciar carrito"
                      className="btn btn-warning"
                      onClick={clear}
                    >
                      Vaciar carrito
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.imagen}
                        alt={"Imagen de " + item.nombre}
                        width={50}
                      />
                    </td>
                    <td className="text-start align-middle">{item.nombre}</td>
                    <td className="text-center align-middle">
                      {item.cantidad}
                    </td>
                    <td className="text-center align-middle">
                      $ {item.precio * item.cantidad}
                    </td>
                    <td className="text-center align-middle">
                      <Link
                        title="Eliminar producto"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        <img
                          src={"img/delete.svg"}
                          width={24}
                          alt="Remover producto"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td className="text-center align-middle">
                    <b> Suma Total:</b>
                  </td>
                  <td className="text-center align-middle">
                    <b>$ {sumaTotal()}</b>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <Link
              title="Ir a pagar"
              to={"/checkout"}
              type="button"
              className="button-agregar col-md-3 mt-3 mb-3"
            >
              Finalizar mi compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
