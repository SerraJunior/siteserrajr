import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

function Banner() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  }

  return (
    <section id='secaoCapa'>
      <Slider {...settings}>
        <div className='slideBanner first'>
          <h1 className='titleBanner'>Conheça a Serra Jr. <br></br>Engenharia</h1>
        </div>
        <div className='slideBanner second'>
          <h1 className='titleBanner'>Serviços em Engenharia de <br></br>Computação</h1>
          <h2 className='subtitleBanner'>Desenvolvimento de Sites e Sistemas WEB, Sistemas e <br></br> Automação de Processos</h2>
        </div>
        <div className='slideBanner third'>
          <h1 className='titleBanner'>Serviços em Engenharia <br></br> Mecânica</h1>
          <h2 className='subtitleBanner'>Modelagem 3D de peças e máquinas, Análises Estruturais e <br></br> Projeto de Máquinas</h2>
        </div>
        
      </Slider>
    </section>
  )
}


export default Banner