import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './contexts/createContext';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <Home /> } />
          </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
