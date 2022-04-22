import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, createContext } from 'react';
import { CartContextProvider } from './Components/Context/CardContext';

export const Context = createContext()

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='*' element={<h1>NOT FOUND 404</h1> } />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <main className='app-main'>

      </main>
    </div>
  );
}

export default App
