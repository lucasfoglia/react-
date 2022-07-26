import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {

  return (
    <div className="App">
       <NavBar/>
      <ItemListContainer greeting="Bienvenidos al Sitio"/>
      <ItemCount/>
    </div>
  )
}

export default App
