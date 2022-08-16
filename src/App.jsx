import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemListDetail from "./components/ItemListDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext, useCartContext } from "./CartContext";

function App() {
  const cartValue = useCartContext();

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: "grey" }}>
      <BrowserRouter>
        <CartContext.Provider value={cartValue}>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemListDetail />} />
            <Route exact path='/category/:catId' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;