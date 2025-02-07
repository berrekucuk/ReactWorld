import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import AppRoutes from './utils/AppRoutes';
import './utils/site.css'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<AppRoutes/>);


