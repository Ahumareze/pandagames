import React from 'react';

//styles
import './App.css';

//components
import {Route, Routes} from 'react-router-dom';

import { Home, Collections } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections/' element={<Collections />} />
      </Routes>
    </div>
  );
}

export default App;