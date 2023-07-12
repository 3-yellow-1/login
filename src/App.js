import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './screen/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
        <Routes>
		        <Route path="/Login" element={<Login />}></Route>
        </Routes>
    </div>
  );
}

export default App;