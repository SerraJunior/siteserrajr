import React from 'react'
import logo from '../../assets/desenhoTecnico.png'
import './style.css'

function Mec3(props) {
  return (
    <div className='prototipagem'>
      <div style={{alignItems: 'center'}} className='ContainerProjMec3'>
        <div className='projetosMeContaiter3'>
          <div className='textMeContainer3'>
            <h1 className='titleMec'>
            Desenho Técnico e modelagem 3D
            </h1>
            <span className='textMec'>
            Se você fabrica algum tipo de maquinário ou produto e ainda não tem um desenho técnico que facilite, descreva e represente uma ideia por meio de regras e procedimentos, nós podemos te ajudar!
            </span>
          </div>
          <div className='imgMeContainer3'>
            <img className='imgMec' src={logo} alt="logoPrototipo" />
          </div>
        </div>
        <button className='botaoEstilizado' onClick={() => props.abreModal(1)}>
          Saiba Mais
        </button>
      </div>

    </div>
  )
}

export default Mec3