import React from 'react';
import './styles.css'
import ReactDOM from 'react-dom/client';
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);

