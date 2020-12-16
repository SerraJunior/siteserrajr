import React from 'react'
import './style.css'
import bandeiraImg from '../../assets/flag.png'
import coracaoImg from '../../assets/coracao.png'
import binoculosImg from '../../assets/binoculos.png'

function Mission() {
  return (
    <section id='secaoMissao'>
      <div className='whiteContainer'>
        <div className='rowContainer'>
          <div className='coluna'>
            <span id="Missao" className="linkMissao" >
              <h5 className='titleProjetos'>Missão</h5>
              <img className='icon' src={bandeiraImg}></img>
              <center>
                <p>
                  Desenvolver os membros a partir de projetos de engenharia mecânica e engenharia da computação, impactando o mercado para criar valor e fazer diferença.
                 </p>
              </center>
            </span>
          </div>

          <div className='coluna'>
            <div id="Visao" className="linkVisao" >
              <h5 className='titleProjetos'>Visão</h5>
              <img className='icon' src={binoculosImg}></img>

              <center>
                <p>
                  Ser uma empresa júnior de alto crescimento em 2020.
                 </p>
              </center>
            </div>
          </div>

          <div className='coluna'>
            <div id="valores" className="linkValores" >
              <h5 className='titleProjetos'>Valores</h5>
              <img className='icon' src={coracaoImg}></img>

              <center>
                <p>
                  Sem elefantes brancos <br></br>Sem desculpas <br></br>#import  {'<'}Confiabilidade.h{'>'}<br></br> F = M(embros) x A(altruismo)<br></br> Vontade de aprender Transparência
                 </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}

export default Mission