import React from 'react'
import logo from '../../assets/WebDesign.png'
import './style.css'

function Web1() {
  return (
    <section>
    <h1 className='tituloPages'> WEB </h1>
    <div className='linhaPages'></div>
    <div className='prototipagem'>
      <div style={{alignItems: 'center'}} className='ContainerAutomacao1'>
        <div className='projetosAutoContainer'>
        <hr className='separador'/>
          <div className='textMeContainer3'>
            <h1 className='titleMec'>
                Web sites
            </h1>
            <span className='textMec'>
                Hoje, segundo a Organização das Nações Unidas,750 milhões de famílias estão conectadas aos seus computadores. Fixe sua marca e fique mais perto de seus clientes realizando um site conosco!
            </span>
          </div>
          <div className='imgMeContainer3'>
            <img className='imgMec' src={logo} alt="logoPrototipo" />
          </div>
        </div>
        <button className='botaoEstilizado'>
          Saiba Mais
        </button>
      </div>

    </div>
    </section>
  )
}

export default Web1