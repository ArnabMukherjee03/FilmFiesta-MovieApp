import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store.js';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';
// import "../node_modules/react-modal-video/scss/modal-video.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


