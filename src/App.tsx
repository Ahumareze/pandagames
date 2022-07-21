import React from 'react';

//styles
import './App.css';

//components
import {Route, Routes} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

import { Store } from './containers';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/store' element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;