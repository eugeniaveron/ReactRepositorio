import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Novocals from './componentes/Novocals';
import CartContextProvider from './componentes/Context/CartContext';
import AppContextProvider from './componentes/Context/AppContext';
import Cart from './componentes/cart/Cart.js';
import ProductDetail from './componentes/firebase/ProductDetail';
import Productos from './componentes/firebase/productos';
import Detail from './componentes/firebase/Detail';
import CartFirebase from './componentes/cart/CartFirebase';


function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element= {<ItemListContainer/>}></Route>
                <Route path='/categorias' element={<ItemListContainer/>} />
                <Route path='/productos/:productosId' element= {<Detail/>}></Route>
                <Route path='/cart' element={<Cart/>} />
                <Route path='/vocales' element={<Novocals/>} />
                <Route path='/producto' element={<ProductDetail/>} />
                <Route path='/productos' element={<Productos/>} />
                <Route path='/detalles' element={<Detail/>} />
                <Route path='/cartf' element={<CartFirebase/>} />
                
                <Route></Route>
                <Route></Route>
            </Routes>
          </BrowserRouter> 
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
