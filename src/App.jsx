import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemListDetail from "./components/ItemListDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemListDetail/>}/>
          <Route exact path='/category/:catId' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
