import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from './componentes/Context/CartContext';
import AppContextProvider from './componentes/Context/AppContext';
import Cart from './componentes/cart/Cart.js';


import CartFirebase from './componentes/cart/CartFirebase';
import ItemList from './componentes/ItemList/ItemList';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


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
                
                <Route path='/productos' element={<ItemList/>} />
                <Route path='/detalles' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
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
