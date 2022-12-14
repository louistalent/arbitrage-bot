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

import Admin from './pages/admin/admin';
import DepositUsdtTable from './pages/admin/depositUsdtTable';
import DepositUsdcTable from './pages/admin/depositUsdcTable';
import WithdrawUsdtTable from './pages/admin/withdrawUsdtTable';
import WithdrawUsdcTable from './pages/admin/withdrawUsdcTable';
import Reward from './pages/admin/reward';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';
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

          <Route path="/home/:id" element=<Admin /> />
          <Route path="/deposit-usdt-table/:id" element=<DepositUsdtTable /> />
          <Route path="/deposit-usdc-table/:id" element=<DepositUsdcTable /> />
          <Route path="/withdraw-usdt-table/:id" element=<WithdrawUsdtTable /> />
          <Route path="/withdraw-usdc-table/:id" element=<WithdrawUsdcTable /> />
          <Route path="/reward/:id" element=<Reward /> />
        </Routes>
      </BrowserRouter>
      <NotificationContainer />

    </Web3ReactProvider>
  );
}

export default App;
