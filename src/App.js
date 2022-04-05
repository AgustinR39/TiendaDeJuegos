import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/Counter/Counter';

const App = () => {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className='app-main'>
        <ItemListContainer greeting="Tienda"/>
        {/* <button onClick={() => setShow(!show)}>{ show ? 'desmontar contador' : 'montar contador'}</button>
        { show ? <Counter initial={1} stock={5} onAdd={handleOnAdd}/> : null} */}
      </main>
    </div>
  );
}

export default App
