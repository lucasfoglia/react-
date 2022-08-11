import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemListDetail from "./components/ItemListDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext, cartState } from "./CartContext";

function App() {

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: "grey" }}>
      <CartContext.Provider value={cartState}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemListDetail />} />
            <Route exact path='/category/:catId' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App; 