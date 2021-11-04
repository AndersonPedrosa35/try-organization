import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './contexts/createContext';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/home" component={ Home } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
