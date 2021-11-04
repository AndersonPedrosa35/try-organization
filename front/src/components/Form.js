import React from 'react';
import './form.css';

export default function Form() {
  return (
    <form className="formLogin">
      <label htmlFor="login" className="inputLogin">
        Login
        <input id="login" onChange={} />
      </label>
      <label htmlFor="pass" className="inputLogin">
        Senha
        <input id="pass" onChange={} />
      </label>
    </form>
  )
}
