import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Este es el componente principal que gestiona las rutas
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Este es el componente principal de la aplicación */}
  </React.StrictMode>
);
