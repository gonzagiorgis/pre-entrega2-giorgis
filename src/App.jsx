import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <ItemListContainer
        greeting={
          "Próximamente agregaremos los productos. Ten un poco de paciencia."
        }
      />
      <Footer />
    </div>
  );
}

export default App;
