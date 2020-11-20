import React from 'react'
import "./style.css"


import histImg from '../../assets/hist.jpg'
import mejImg from '../../assets/mej.jpg'
import iprjImg from '../../assets/iprj.jpg'

import { Nav, Tab, TabContainer, Tabs } from 'react-bootstrap'

function ControlledTabs() {


  return (
    <div className='container'>
      <h1 className='tituloSecoes'> A Serra Jr. </h1>
      <div className='linha'></div>


      <Tab.Container id="" defaultActiveKey="Nossa História">

        <Nav variant="tabs" className="">
          <Nav.Item>
            <Nav.Link className='tab1' eventKey="Nossa História"><span>Nossa História</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='tab1' eventKey="MEJ"><span>MEJ</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='tab1' eventKey="IPRJ"><span>IPRJ</span></Nav.Link>
          </Nav.Item>

        </Nav>


        <Tab.Content>
          <Tab.Pane eventKey="Nossa História">
            <div className='tab'>
              <img src={histImg} className="histImg"></img>
              <div>
                <h5 style={{ fontWeight: 'bold' }}> Nossa História </h5>
                <span>
                  A Serra Jr. Engenharia, criada em 08 de maio de 2002, é uma empresa formada
                  exclusivamente por alunos do curso de graduação de Engenharia Mecânica e de
                  Engenharia de Computação do Instituto Politécnico da Universidade do Estado
                  do Rio de Janeiro – IPRJ/UERJ e tem como objetivo central o incentivo à inserção
                  e desenvolvimento dos alunos na prática empresarial.
                  Teve suas atividades paradas no ano de 2011 devido a tragédia climática que abalou
                  Nova Friburgo. Em 2013, retomou com força total seus projetos. Hoje, está melhor
                  do que nunca oferecendo soluções em engenharia mecânica e computação para todo o
                  mercado.
                                </span>
              </div>
            </div>

          </Tab.Pane>
          <Tab.Pane eventKey="MEJ">
            <div className='tab'>
              <img src={mejImg} className="mejImg"></img>
              <div>
                <h5 style={{ fontWeight: 'bold' }}> Movimento Empresa Júnior </h5>
                <span>
                  Em 1967, alguns estudantes franceses não se conformaram apenas com a sala de aula e
                  formaram a primeira empresa júnior. Hoje, o movimento se alastrou pelo mundo todo e
                  o Brasil é o número 1 nessa prática. Temos por base complementar a formação
                  acadêmica fornecendo experiências práticas. Uma empresa júnior é uma associação
                  civil ,sem fins lucrativos, gerida exclusivamente por alunos de graduação de uma
                  universidade, que presta serviços e desenvolve projetos para empresas.
                                </span>
                <br /><br />
                <a className='link_externo' target='_blank' href="http://brasiljunior.org.br/"> SAIBA MAIS </a>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="IPRJ">
            <div className='tab'>
              <img src={iprjImg} className="iprjImg"></img>
              <div>
                <h5 style={{ fontWeight: 'bold' }}> O Instituto Politécnico do Rio de Janeiro </h5>
                <span>
                  O Instituto Politécnico do Rio de Janeiro - IPRJ é o campus da Universidade do
                  Estado do Rio de Janeiro (UERJ) em Nova Friburgo, situado na Rua Bonfim em Vila Amélia.
                  Atua em ensino, pesquisa e extensão, incluindo, além das graduações em Engenharia Mecânica e
                  Engenharia de Computação, Mestrado e Doutorado em Modelagem Computacional (Capes nível 6),
                  desde 1995, e Mestrado em Ciência e Tecnologia de Materiais desde 2007.
                                </span>
                <br /><br />
                <a className='link_externo' target='_blank' href="http://www.iprj.uerj.br/"> SITE DO INSTITUTO </a>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>

  )
}

export default ControlledTabs