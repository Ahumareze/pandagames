import React from 'react';

//styles
import './App.css';

//components
import {Route, Routes} from 'react-router-dom';

//pages
import {
  Home,
  Collection,
  Collections,
  Selected,
  Cart,
  Checkout,
  Search
} from './pages';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections/' element={<Collections />} />
        <Route path='/collections/:id' element={<Collection />} />
        <Route path='/games/:id' element={<Selected />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;