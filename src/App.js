import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import Contador from './componentes/Contador';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/consumiendoapis/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      {/*<BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={}></Route>
      </Routes>
      </BrowserRouter> */}
      <NavBar/>
      {/*<ItemListContainer/> */} 
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
