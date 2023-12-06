import './App.css';
import NavBar from './components/NavBar/NavBar';
import Logoimg from "./components/img/Logo-sucus.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <div>
      <NavBar img={Logoimg}/>
      </div>
      
      <ItemListContainer mensaje={"Bienvenidos a mi primera pagina con React JS"}/>
      <ItemDetailContainer/>

    </div>
  )
}

export default App;
