/* esLint-disable */ 
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './screen/Main';
import Login from './screen/Login';
import User from './screen/User';
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
      <Route path="/Information" element={<Information />} />
      <Route path="/UserList" element={<UserList />} />
    </Routes>

    </div>

  </BrowserRouter>
  );
}

export default App;