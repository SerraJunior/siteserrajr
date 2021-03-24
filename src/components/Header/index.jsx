import React from 'react'
import logo from '../../assets/LogoSerraJr.png'

import './style.css'

function Header() {

  return (
    <header className='header'>
      <section className='secaoHeader'>
        <a href='https://serrajr.netlify.app/'>
          <img className='LogoSerra' src={logo} alt="Logo" />
        </a>
        <div className='navContainer'>
          <ul className="LinksList">
            <li className="navItem"><a className="LinkHeader" href="https://serrajr.netlify.app/#secaoCapa" > INÍCIO </a></li>
            <li className="navItem"><a className="LinkHeader" href="https://serrajr.netlify.app/#secaoSobre" > SERRA JR. </a></li>
            <li className="navItem"><a className="LinkHeader" href="https://serrajr.netlify.app/#secaoServicos"> SERVIÇOS </a></li>
            <li className="navItem"><a className="LinkHeader" href="https://serrajr.netlify.app/#secaoPortifolio"> PORTIFÓLIO </a></li>
            <li className="navItem"><a className="LinkHeader" href="https://serrajr.netlify.app/#secaoContato"> CONTATOS </a></li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header
