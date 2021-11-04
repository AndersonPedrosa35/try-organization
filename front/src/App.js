
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Login } />
      <Route path="/home" component={ Home } />
    </BrowserRouter>
  );
}

export default App;
