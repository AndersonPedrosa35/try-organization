import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './form.css';


export default function Form() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  async function dispatchLoginForModel(e) {
    e.preventDefault();
    const request = await api.post('/login', { email: login, senha: pass })
      .then((response) => response.data)
      .catch((err) => err);
      console.log(request);
    if (!request.message) {
      history.push('/home');
    }
  }

  return (
    <form className="formLogin" onSubmit={ dispatchLoginForModel }>
      <label htmlFor="login" className="inputLogin">
        Login
        <input
          id="login"
          value={ login }
          onChange={({ target }) => setLogin(target.value)} 
        />
      </label>
      <label htmlFor="pass" className="inputLogin">
        Senha
        <input
          id="pass"
          value={ pass }
          onChange={({ target }) => setPass(target.value)} 
        />
      </label>
      <button className="inputLogin loginButton"
        disabled={
          !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(login)
          || pass.length <= 6
        }
      >
        Entrar
      </button>
    </form>
  )
}
