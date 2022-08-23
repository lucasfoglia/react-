import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { CartContext, useCartContext } from "./CartContext";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemListDetail from "./components/ItemListDetail";
import NavBar from "./components/NavBar";

function App() {
  const cartValue = useCartContext();

  return (
    <div className="App" style={{ height: "100%", backgroundColor: "#e5e5e5" }}>
      <BrowserRouter>
        <CartContext.Provider value={cartValue}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemListDetail />} />
            <Route
              exact
              path="/category/:catId"
              element={<ItemListContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
        <ToastContainer className="Toastr" />
      </BrowserRouter>
    </div>
  );
}

export default App;
