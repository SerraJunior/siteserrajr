import React from 'react'
import logo from '../../assets/goodidea.png'
import './style.css'

function Blog() {
  return (
    <div className='prototipagem'>
      <div style={{alignItems: 'center'}} className='ContainerProjMec3'>
        <div className='projetosMeContaiter3'>
          <div className='textMeContainer3'>
            <h1 className='titleMec'>
                Projetos de máquinas e equipamentos
            </h1>
            <span className='textMec'>
                Quer colocar suas ideias em prática? A Serra Jr realiza projetos de desenvolvimento de máquinas e/ou equipamentos a partir do zero ou otimizações desses.
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
  )
}

export default Blog