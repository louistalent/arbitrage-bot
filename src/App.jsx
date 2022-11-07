import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

import Home from './pages/home/home';
import PageNotFound from './pages/page_not_found/page_not_found';
import Dashboard from './pages/dashboard/dashboard';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'


function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
// require('dotenv').config();
// import WebContext from './context';
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element=<PageNotFound /> />
          <Route path="/" element=<Home /> />
          <Route path="/dashboard" element=<Dashboard /> />
        </Routes>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
