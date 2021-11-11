import React from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <img src='EBYtr.png' alt='Logo da empresa' style={{ width: '3rem' }}/>
      <h2>Atividades</h2>
      { pathname !== '/' &&  <h4>{ JSON.parse(localStorage.getItem('login')).login }</h4>}
    </header>
  )
}
