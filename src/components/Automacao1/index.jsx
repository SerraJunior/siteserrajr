import React from 'react'
import logo from '../../assets/arduino.png'
import './style.css'

function Auto1(props) {
  return (
    <section>
    <h1 className='tituloPages'> AUTOMAÇÃO </h1>
    <div className='linhaPages'></div>
    <div className='prototipagem'>
      <div style={{alignItems: 'center'}} className='ContainerAutomacao1'>
        <div className='projetosAutoContainer'>
        <hr className='separador'/>
          <div className='textMeContainer3'>
            <h1 className='titleMec'>
                Sistema de Controle de Variáveis
            </h1>
            <span className='textMec'>
                Variáveis precisam ser analisadas e controladas em um processo produtivo. Com um sistema de controle de variáveis, a Serra Jr. eleva seu nível de produção pela redução das variabilidades de seus processos.
            </span>
          </div>
          <div className='imgMeContainer3'>
            <img className='imgMec' src={logo} alt="logoPrototipo" />
          </div>
        </div>
        <button className='botaoEstilizado'  onClick={() => props.abreModal(1)}>
          Saiba Mais
        </button>
      </div>

    </div>
    </section>
  )
}

export default Auto1