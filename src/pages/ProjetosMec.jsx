import React, { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjetosMec1 from '../components/ProjetosMec1'
import ProjetosMec2 from '../components/ProjetosMec2'
import ProjetosMec3 from '../components/ProjetosMec3'
import Modal from '../components/Modal'

function ProjetosMec() {
    const [mostraModal, setModal] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")
    const textoMec1 = <span>O Desenho Técnico é um investimento essencial para o seu empreendimento, já que seus benefícios vão muito além de facilitar a execução do projeto por demonstrar todos os detalhes necessários. Ao optar por esse tipo de serviço, seja para o seu maquinário, peças ou qualquer outro tipo de produto, você facilita o controle e o acesso a informações essenciais tendo um impacto significativo na sua organização, nos resultados entregues pela sua equipe e no saldo final da sua empresa. Utilizando softwares CAD, a Serra Jr irá elaborar um modelo contendo as características, funcionalidades e requisitos do produto permitindo assim a sua fabricação e/ou seu registro em patente. Com a conclusão do projeto serão gerados os desenhos técnicos, e caso seja necessário, relatórios e manuais de montagem.</span>
    
    const textoMec2 = <span>O uso de protótipos pode ser uma excelente ferramenta para auxiliar no processo de especificação funcional, principalmente porque eles representam um modelo simplificado do produto final. A Serra Jr. elabora protótipos utilizando a <span style={{fontWeight: 'bold'}}>impressão 3D</span> proporcionando ao cliente:
        <br/><br/>
        <ul style={{ marginLeft: '60px'}}>
            <li>Identificar antecipadamente os erros e modificações, reduzindo o custo de desenvolvimento.</li>
            <li>Visualizar como será o sistema – gerando a possibilidade de mudar o que não está de acordo com o desejado logo no início do projeto.</li>
            <li>Identificar funcionalidades e fluxo - caso algo tenha sido esquecido, é detectado mais rapidamente.</li>
            <li>Diminuir o tempo de desenvolvimento.</li>
            <li>Reduzir de riscos no projeto.</li>
        </ul>
        # Gostaria de saber se a Serra Jr pode te ajudar? Contate-nos e peça um orçamento ou agende uma reunião sem compromisso preenchendo os dados do nosso formulário de contato a seguir. #
        <br/><br/><div className='separador'></div></span>
        

    const textoMec3 = <span>A Serra Jr realiza projetos de desenvolvimento de máquinas a partir do zero ou otimizações dos já existentes, avaliando a viabilidade técnica de todos os seus componentes. Através de cálculos, simulações computacionais, estudo de materiais e de sistemas auxiliares é elaborado um relatório e um manual de fabricação, possibilitando a obtenção de patente da peça ou do equipamento idealizado.
        <br/><br/># Gostaria de saber se a Serra Jr pode te ajudar? Contate-nos e peça um orçamento ou agende uma reunião sem compromisso preenchendo os dados do nosso formulário de contato a seguir. #
        <br/><br/><div className='separador'></div></span>
    
    function handleShow(key) {
        if (key===1) {
            setTitulo("Desenho Técnico e modelagem 3D")
            setTexto(textoMec1)
        }
        else if (key===2) {
            setTitulo("Prototipagem")
            setTexto(textoMec2)
        }
        else if (key===3){
            setTitulo("Projetos De Máquina")
            setTexto(textoMec3)
        }
        setModal(true)        
    }

    function handleClose() {
        setModal(false)
    }

    return (
        <div>
            <Modal titulo={titulo} texto={texto} fechaModal={handleClose} abreModal={handleShow} showModal={mostraModal} />
            <Header/>
            <div style={{marginTop: '70px'}}></div>
            <ProjetosMec1 fechaModal={handleClose} abreModal={handleShow}/>
            <ProjetosMec2 fechaModal={handleClose} abreModal={handleShow}/>
            <ProjetosMec3 fechaModal={handleClose} abreModal={handleShow}/>
            <Footer/>
        </div>
    )
}

export default ProjetosMec