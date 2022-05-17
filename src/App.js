import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/consumiendoapis/ItemDetailContainer';
import Novocals from './componentes/Novocals';
import CartContextProvider from './componentes/Context/CartContext';
import AppContextProvider from './componentes/Context/AppContext';
import Cart from './componentes/cart/Cart.js';


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
                <Route path='/productos/:productosId' element= {<ItemDetailContainer/>}></Route>
                <Route path='/cart' element={<Cart/>} />
                <Route path='/vocales' element={<Novocals/>} />
                
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
