import React from "react";
import { Carousel } from 'react-bootstrap'

import capaSerra from '../../assets/capaSerra.jpg'
import capaComp from '../../assets/capaComp.jpg'
import capaMec from '../../assets/capaMec.jpg'
import "./style.css"

export default function Slider() {

  return (
    <section id='secaoBanner'>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={capaSerra}
            alt='Capa Serra'
          />
          <Carousel.Caption>
            <h3 className='titleBanner'>Conheça a Serra</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={capaComp}
            alt="capaComp"
          />

          <Carousel.Caption>
            <h3 className='titleBanner'>Serviços em Engenharia de Computação</h3>
            <p className='subtitleBanner'> Atuação na área de Engenharia Mecânica e Engenharia de Computação </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={capaMec}
            alt="capaMec"
          />

          <Carousel.Caption>
            <h3 className='titleBanner'>Serviços em Engenharia Mecânica</h3>
            <p className='subtitleBanner'>Modelagem 3D de peças e máquinas, Análises Estruturais e Projeto de Máquinas</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}
