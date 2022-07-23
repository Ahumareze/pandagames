import React from 'react';

//styles
import './App.css';

//components
import {Route, Routes} from 'react-router-dom';

import { Home, Collections, Collection, Selected } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections/' element={<Collections />} />
        <Route path='/collections/:id' element={<Collection />} />
        <Route path='/games/:id' element={<Selected />} />
      </Routes>
    </div>
  );
}

export default App;