import React, { useState } from 'react'
import logo from '../../assets/LogoSerraJr.png'

import './style.css'

function Header() {

  return (
    <header className='header'>
      <section className='secaoHeader'>
        <a href='http://localhost:3000'>
          <img className='LogoSerra' src={logo} alt="Logo" />
        </a>
        <div className='navContainer'>
          <ul className="LinksList">
            <li className="navItem"><a className="LinkHeader" href="http://localhost:3000#secaoCapa" > INÍCIO </a></li>
            <li className="navItem"><a className="LinkHeader" href="http://localhost:3000#secaoSobre" > SERRA JR. </a></li>
            <li className="navItem"><a className="LinkHeader" href="http://localhost:3000#secaoServicos"> SERVIÇOS </a></li>
            <li className="navItem"><a className="LinkHeader" href="http://localhost:3000#secaoPortifolio"> PORTIFÓLIO </a></li>
            <li className="navItem"><a className="LinkHeader" href="/Blog"> BLOG </a></li>
            <li className="navItem"><a className="LinkHeader" href="http://localhost:3000#secaoContato"> CONTATOS </a></li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header
