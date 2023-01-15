import React from "react";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Error404 from "./componentes/Error404";
import CartContextProvider from "./componentes/context/CartContext";
import Cart from "./componentes/Cart";
import CheckOut from "./componentes/CheckOut";

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<CheckOut />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
