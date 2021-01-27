import React, { useState } from 'react'
import logo from '../../assets/LogoSerraJr.png'
import iconeHeader from '../../assets/lista.png'
import { FaBars, FaTimes } from 'react-icons/fa'

import './style.css'

function Header() {

  const [clicked, setClicked] = useState(false)

  function getIcon() {
    if (clicked == false) {
      return (
        <div onClick={() => setClicked(true)} className='IconBar'>
          <FaBars size={30} />
        </div>
      )
    } else if (clicked == true) {
      return (
        <div onClick={() => setClicked(false)} className='IconBar'>
          <FaTimes size={30} />
        </div>
      )
    }

  }

  return (
    <header className='header'>
      <section className='secaoHeader'>
        <a href='http://localhost:3000'>
          <img className='LogoSerra' src={logo} alt="Logo" />
        </a>

        {getIcon()}
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
