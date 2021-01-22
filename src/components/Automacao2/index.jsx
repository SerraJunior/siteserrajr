import React from 'react'
import logo from '../../assets/arduino2.png'
import './style.css'

function Automacao2(props) {
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
                Automação e Controle de Processos
              </h1>
              <span className='textMec'>
                Por que não ter maior produção, menor custo de produção, maior qualidade? Com a automação ou controle de seu processo, você pode.
              </span>
            </div>
          </div>
          <button className='botaoEstilizado' onClick={() => props.abreModal(2)}>
            Saiba Mais
        </button>
        </div>

      </div>
    </section>
  )
}

export default Automacao2