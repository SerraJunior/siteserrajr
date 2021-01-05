import React from 'react'
import logo from '../../assets/WebDesign.png'
import './style.css'

function Web2() {
  return (
    <section>
      <div className='prototipagem'>
        <div style={{ alignItems: 'center' }} className='grayContainer'>
          <div className='projetosAutoContainer'>           
            <div className='imgMeContainer3'>
              <img className='imgMec' src={logo} alt="logoPrototipo" />
            </div>

            <div className='textMeContainer3'>
              <h1 className='titleMec'>
                Sistemas Web
              </h1>
              <span className='textMec'>
              Disponibilizar pessoas para registrar vendas, estoques, funcionários e caixa pode ser muito trabalhoso e demandar muito tempo. Com um sistema web você consegue automatizar e tornar esse monitoramento mais eficiente.
              </span>
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

export default Web2