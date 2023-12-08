import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Logoimg from "./components/img/Logo-sucus.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar img={Logoimg} />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
