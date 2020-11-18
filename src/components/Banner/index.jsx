import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

function SimpleSlider() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    
    return (
      <div className='banner'>
        <Slider {...settings}>
          <div className='card-slider slide1'>
            <h1 className="banner-title">Conheça a Serra Jr. Engenharia</h1>
          </div>
          <div className='card-slider slide2'>
            <h1 className="banner-title">Serviços em Engenharia Mecânica</h1>
            <h2 className="banner-subtitle">Modelagem 3D de peças e máquinas, Análises Estruturais e Projeto de Máquinas</h2>
          </div>
          <div className='card-slider slide3'>
            <h1 className="banner-title">Serviços em Engenharia de Computação</h1>
            <h2 className="banner-subtitle">Desenvolvimento de Sites e Sistemas WEB, Sistemas e Automação de Processos</h2>
          </div>
          
        </Slider>
      </div>
    )
}

export default SimpleSlider
