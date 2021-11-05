import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RemoverTodos from './components/RemoverTodos';
import Provider from './contexts/createContext';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/home/remove" component={ RemoverTodos } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
