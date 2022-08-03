import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos al Sitio" />
        <ItemCount />
      </BrowserRouter>
    </div>
  );
}

export default App;
