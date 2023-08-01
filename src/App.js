/* esLint-disable */ 
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './screen/Main';
import Login from './screen/Login';
import User from './screen/User';
import TabMenu from './components/TabMenu';
import UserDetail from './components/UserDetail';
import Information from './screen/Information';
import UserList from './components/UserList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/User" element={<User />}/>
      <Route path="/UserDetail" element={<UserDetail />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/UserList" element={<UserList />} />
      <Route path="/TabMenu" element={<TabMenu />} />
    </Routes>

    </div>

  </BrowserRouter>
  );
}

export default App;