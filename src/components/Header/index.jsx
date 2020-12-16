import React from 'react'
import logo from '../../assets/LogoSerraJr.png'

import './style.css'

function Header() {
    return (
        <header className='header'>
            <section className='secaoHeader'>
                <div>
                    <img className='LogoSerra' src={logo} alt="Logo" />
                </div>

                <div className='navContainer'>
                   

                <ul className="LinksList">
                    

                    <li className="navItem"><a className="LinkHeader" href="#secaoCapa" > INÍCIO </a></li>
                    <li className="navItem"><a className="LinkHeader" href="#secaoSobre" > SERRA JR. </a></li>
                    <li className="navItem"><a className="LinkHeader" href="#secaoServicos"> SERVIÇOS </a></li>
                    <li className="navItem"><a className="LinkHeader" href="#secaoPortifolio"> PORTIFÓLIO </a></li>
                    <li className="navItem"><a className="LinkHeader" href="/Blog"> BLOG </a></li>
                    <li className="navItem"><a className="LinkHeader" href="#secaoContato"> CONTATOS </a></li>
                    
                </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;
