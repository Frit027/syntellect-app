import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store1, store2 } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App store1={store1} store2={store2} />
  </React.StrictMode>
);
