import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// //redux setup
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// import reducer from './redux/reducers/mainReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(thunk)
//   )
// );

const app = (
  // <Provider store={store}>
    <App />
  // </Provider>
)


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {app}
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
