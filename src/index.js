import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Login from './screen/Login';
import Profile from './screen/Profile';
import HandleLogout from './services/HandleLogout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/HandleLogout" element={<HandleLogout />} />
    </Routes>
  </BrowserRouter>,
);
reportWebVitals();
