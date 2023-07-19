import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/footer/footer.css'
import '../src/styles/header/header.css'
import '../src/styles/error/errorComponent.css'
import '../src/styles/banner/banner.css'
import '../src/styles/card/card.css'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);