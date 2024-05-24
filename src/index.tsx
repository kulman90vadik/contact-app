import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/includes.scss'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Provaider';


<link href="https://fonts.googleapis.com/css?family=Outfit:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

   <Provider>

      <BrowserRouter>
        <Header />
        <main>
            <Home />
        </main>
        <Footer />
      </BrowserRouter>

  </Provider>

);


