import React from "react";
import { Carousel } from 'react-bootstrap'

import "./style.css"

import imgFazenda from '../../assets/logoSoledade.jpg'
import imgChassi from '../../assets/logoChassi.jpg'
import imgTMF from '../../assets/logoTMF.jpg'

export default function Slider() {

  return (
    <div className='container'>
      <h1 className='tituloSecoes'> Nosso Portifólio </h1>
      <div className='linha'></div>
      <section id='secaoPortfolio'>
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="primeiraAba">
              <div className="imagemPortifolio">
                <img src={imgFazenda} className="portifolioImg" />
              </div>

              <div className='textPortifolio'>
                  <h2>Fazenda Soledade</h2>              
                <span className='justifyText'>
                  Sistema de controle de variáveis, criado para automatizar
                  os relatórios de temperaturas usados no controle de
                  produção da fábrica. Foram utilizados sensores e arduíno
                  para obtenção das temperaturas e um Sistema Local para interface.
                </span>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="primeiraAba">
              <div className="imagemPortifolio">
                <img src={imgChassi} className="portifolioImg" />
              </div>
              <div className='textPortifolio'>
                  <h2>RL Oficina de Motocicletas</h2>
                  <span className='justifyText'>
                    Foram feitos desenhos técnicos dos componentes de um chassi de
                    motocicleta customizada afim de que o cliente pudesse registrar
                    no Inmetro e assim comercializar este tipo de moto fabricada por ele.
                  </span>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="primeiraAba">
              <div className="imagemPortifolio">
                <img src={imgTMF} className="portifolioImg" />
              </div>
              <div className='textPortifolio'>
                  <h2>TMF Indústria Mecânica</h2>
                  <span className='justifyText'>
                    Criação de desenhos técnicos de todos os componentes de duas máquinas
                    de colagem e dobragem criadas pelo cliente, para que fosse possível
                    fabricar algumas delas de acordo com as dimensões dos protótipos.
                  </span>
              </div>
            </div>
          </Carousel.Item>
          
        </Carousel>
      </section>
      
    </div>

  )
}