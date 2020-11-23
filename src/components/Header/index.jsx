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
                    

                    <li className="navItem"><a className="LinkHeader" > INÍCIO </a></li>
                    <li className="navItem"><a className="LinkHeader" > SERRA JR. </a></li>
                    <li className="navItem"><a className="LinkHeader" > SERVIÇOS </a></li>
                    <li className="navItem"><a className="LinkHeader" > PORTIFÓLIO </a></li>
                    <li className="navItem"><a className="LinkHeader" > BLOG </a></li>
                    <li className="navItem"><a className="LinkHeader"> CONTATOS </a></li>
                    
                </ul>
                   


                </div>

            </section>
        </header>
    );
}

export default Header;
