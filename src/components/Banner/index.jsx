import React from "react";
import { Carousel } from 'react-bootstrap'

import "./style.css"

export default function Slider() {

  return (
    <section id='secaoBanner'>

      <Carousel>
        <Carousel.Item>
          <div className="first slide">
            <h3 className='titleBanner'>Conheça a Serra</h3>
          </div> 
        </Carousel.Item>

        <Carousel.Item>
          <div className="second slide">
            <h3 className='titleBanner'>Serviços em Engenharia de Computação</h3>
            <p className='subtitleBanner'> Atuação na área de Engenharia Mecânica e Engenharia de Computação </p>
          </div>              
        </Carousel.Item>

        <Carousel.Item>
          <div className="third slide">
          <h3 className='titleBanner'>Serviços em Engenharia Mecânica</h3>
            <p className='subtitleBanner'>Modelagem 3D de peças e máquinas, Análises Estruturais e Projeto de Máquinas</p>
          </div>     
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
