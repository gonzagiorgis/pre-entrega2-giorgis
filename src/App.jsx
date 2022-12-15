import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import ItemCount from "./componentes/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <ItemListContainer />
      <ItemCount />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
