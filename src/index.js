import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store.js';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';
import TrailerProvider from './hooks/useTrailer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <TrailerProvider>
    <App />
    </TrailerProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


