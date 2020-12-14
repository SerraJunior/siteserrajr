import React from 'react'
import './style.css'

import Logo2 from '../../assets/Logo2.png'
import logoFace from '../../assets/facebook.png'
import logoInsta from '../../assets/instagram.png'
import logoyt from '../../assets/youtube.png'

function Footer() {
  return (
    <footer>
      <div className='formaRodape'>
        <div style={{marginLeft: '3%', marginRight: '3%'}}>
          <div className='rowFooter'>
            <div className='footerElemento'>
              <h3 className="footerTitulos">Menu</h3>
              <div className="footerLinha"></div>
              <ul className="rodape_listas">
                <li className="rodape_elementos"> &gt; <a className="rodape_link" href="#secaoCapa">Início</a></li>
                <li className="rodape_elementos"> &gt; <a className="rodape_link" href="#secaoSobre">Quem Somos</a></li>
                <li className="rodape_elementos"> &gt; <a className="rodape_link" href="#secaoServicos">Serviços</a></li>
                <li className="rodape_elementos"> &gt; <a className="rodape_link" href="#secaoPortifolio">Portfólio</a></li>
                <li className="rodape_elementos"> &gt; <a className="rodape_link" href="#secaoBlog">Blog</a></li>
                <li className="rodape_elementos"> &gt; <a className="rodape_link" href="#secaoContato">Contato</a></li>
              </ul>
            </div>
            <div className='footerElemento'>
              <h3 className="footerTitulos">Contato</h3>
              <div className="footerLinha"></div>
              <ul className="rodape_listas">
                <li className="rodape_elementos">
                  <a id="link_secaoContato" href="#secaoContato" className="rodape_link">
                    Rua Bonfim, 25 - Vila Amélia
                  </a>
                </li>

                <li className="rodape_elementos">
                  <a id="link_secaoContato" href="#secaoContato" className="rodape_link">
                    Bloco 1, 3º andar, sala 312.
                  </a>
                </li>

                <li className="rodape_elementos">
                  <a id="link_secaoContato" href="#secaoContato" className="rodape_link">
                    Nova Friburgo,RJ CEP: 28.625-570
                  </a>
                </li>

                <li className="rodape_elementos">
                  <span className="rodape_link">
                    (22) 2533-2265 / ramal 3122
                  </span>
                </li>

                <li className="rodape_elementos">
                  <a href="#secaoContato" className="rodape_link">
                    atendimento.serrajunior@gmail.com
                  </a>
                </li>

              </ul>
            </div>
            <div className='footerElemento'>
              <h3 className="footerTitulos">Tags</h3>
              <div className="footerLinha"></div>
              <div className="rodape_tags">
                <span className="tags rodape_elementos"> Desenvolvimento Web </span>
                <span className="tags rodape_elementos"> Automação Indutrial </span>
                <span className="tags rodape_elementos"> Modelagem 2D e 3D </span>
                <span className="tags rodape_elementos"> Termodinâmica </span>
                <span className="tags rodape_elementos"> Engenharia de Computação </span>
                <span className="tags rodape_elementos"> Engenharia Mecânica </span>
              </div>

            </div>
            <div className='footerElemento'>
              <img className='rodapeLogo' src={Logo2} alt="Logo Serra" />
            </div>
          </div>
        </div>
      </div>
      <div className='formaCop'>
        <div className='copContainer'>
          <span className='copTitulo'>
             © Copyright reserved to 
             <span style={{ color: '#EE3B24' }}> Serra Jr. Engenharia </span>
          </span>
          <ul className='listaSocial'>
            <li className='socialMargin '>
              <a target="_blank" href="https://www.facebook.com/serrajreng/?fref=ts" className="social_link facebook" id="social_link_facebook">Facebook <img src={logoFace} className="social_icone" /></a>
            </li>
            <li className='socialMargin '>
              <a target="_blank" href="https://www.instagram.com/serrajreng/" className="social_link instagram" id="social_link_instagram">Instagram <img src={logoInsta} className="social_icone" /></a>
            </li>
            <li className='socialMargin '>
              <a target="_blank" href="https://www.youtube.com/channel/UCZ5rETtu2s9WRPz1GuQ5wcg" className="social_link youtube" id="social_link_youtube"> Youtube <img src={logoyt} className="social_icone" /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer