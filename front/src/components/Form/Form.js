import React, { useState } from 'react';
import './form.css';

export default function Form() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  return (
    <form className="formLogin" onSubmit={() => ''}>
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
      <button className="inputLogin"
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
