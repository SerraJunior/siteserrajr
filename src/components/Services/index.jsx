import React from 'react'
import './style.css'
import engrenagemImg from '../../assets/engrenagem.png'
import lampadaImg from '../../assets/lampada.png'
import devServicesImg from '../../assets/devServicos.png'

function Services() {
  return (
    <section id='secaoServicos'>
      <div className='grayContainer'>
        <div style={{ width: '100%' }} className='coluna'>
          <h1 className='titleServices'> Serviços </h1>
          <h6 className="subtitleServices"> Atuação na área de Engenharia Mecânica e Engenharia de Computação </h6>
          <div className='linha'></div>
        </div>
        <div className='rowContainer'>
          <div className='coluna'>
            <a id="projetosMecanicos" className="linksServicos" >
              <img className='icon' src={engrenagemImg}></img>
              <h5 className='titleProjetos'>Projetos mecânicos</h5>
              <center>
                <p>
                  Desenho Técnico e modelagem 3D<br></br> Prototipagem<br></br> Análise estrutural<br></br> Projetos de máquinas e equipamentos
              </p>
              </center>
            </a>
            <a className="botaoEstilizado">Saiba Mais</a>
          </div>

          <div className='coluna'>
            <a id="projetosMecanicos" className="linksServicos" >
              <img className='icon' src={lampadaImg}></img>
              <h5 className='titleProjetos'>Automação</h5>
              <center>
                <p>
                  Sistemas de Controle de Variáveis<br></br>Automação e Controle de Processos
              </p>
              </center>
            </a>
            <a className="botaoEstilizado">Saiba Mais</a>
          </div>

          <div className='coluna'>
            <a id="projetosMecanicos" className="linksServicos" >
              <img className='icon' src={devServicesImg}></img>
              <h5 className='titleProjetos'>Desenvolvimento Web</h5>
              <center>
                <p>
                  Web Sites<br></br> Sistemas Web<br></br> Aplicativos<br></br>
                </p>
              </center>
            </a>
            <a className="botaoEstilizado">Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>





  )
}

export default Services