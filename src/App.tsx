import React from 'react';

//styles
import './App.css';

//components
import {Route, Routes} from 'react-router-dom';

import { Home } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;