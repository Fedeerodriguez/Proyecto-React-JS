import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Logoimg from "./components/img/Logo-sucus.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CardPovider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/checkout';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div >
      <BrowserRouter>
      <CardPovider>
        <NavBar img={Logoimg} />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje="Productos"/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
        </CardPovider>
      </BrowserRouter>
    </div>
  )
}

export default App;
