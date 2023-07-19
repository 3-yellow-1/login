import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screen/Login';
import Information from './screen/Information';
import HandleLogout from './services/HandleLogout';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Login />
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/HandleLogout" element={<HandleLogout />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}
  
export default App;