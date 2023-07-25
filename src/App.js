import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './screen/Main';
import Login from './screen/Login';
import UserList from './screen/UserList';
import Information from './screen/Information';
import HandleLogout from './services/HandleLogout';
import HandleBackPage from './services/HandleBackPage';
import UseTokenCheck from './services/UseTokenCheck';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/UserList" element={<UserList />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/HandleLogout" element={<HandleLogout />} />
      <Route path="/HandleBackPage" element={<HandleBackPage />} />
      <Route path="/UseTokenCheck" element={<UseTokenCheck />} />
    </Routes>

    </div>

  </BrowserRouter>
  );
}

export default App;