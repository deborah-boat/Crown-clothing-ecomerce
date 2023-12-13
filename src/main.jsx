import React from 'react'
/*import ReactDOM from 'react-dom/client'*/
import App from './App.jsx'
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
/*import './index.scss'*/
import { UserProvider } from './context/user.context.jsx';
import { ProductsProvider } from './context/products.context.jsx';


const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
      <App/>
      </ProductsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
