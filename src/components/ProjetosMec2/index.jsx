import React from 'react'
import logo from '../../assets/prototipo3D.png'
import './style.css'

function Blog() {
  return (
    <div className='prototipagem'>
      <div style={{alignItems: 'center'}} className='grayContainer'>
        <div className='projetosMeContaiter'>
          <div className='imgMeContainer'>
            <img className='imgMec' src={logo} alt="logoPrototipo" />
          </div>
          <div className='textMeContainer'>
            <h1 className='titleMec'>
              Prototipagem
            </h1>
            <span className='textMec'>
              A Serra Jr. Engenharia realiza o desenvolvimento de protótipos a partir da impressão 3D viabilizando seu projeto de modo a antecipar os erros, modificações e reduzir custos.
            </span>
          </div>
        </div>
        <button className='botaoEstilizado'>
          Saiba Mais
        </button>
      </div>

    </div>
  )
}

export default Blog