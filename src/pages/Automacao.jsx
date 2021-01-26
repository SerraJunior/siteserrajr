import React, {useState} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Automacao1 from '../components/Automacao1'
import Automacao2 from '../components/Automacao2'
import Modal from '../components/Modal'

function Automacao() {
    const [mostraModal, setModal] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")
    const textoAuto1 = <span>Historicamente, nos meados das décadas de 70 e 80, com o avanço da eletrônica e o surgimento dos microprocessadores, o computador se tornou uma peça chave nos diversos setores industriais. Surgiram também os primeiros sistemas supervisores que destina-se à captura de informações de um processo de produção e sua armazenagem em um determinado banco de dados. As informações vêm de sensores que capturam dados específicos (conhecidos como variáveis de processo) da planta industrial. 
    <br/><br/> A Serra Jr trabalha na elaboração de projetos de software de supervisão. Nossos softwares monitoram em tempo real a produção utilizando <span style={{fontWeight: 'bold'}}>Arduino</span>, <span style={{fontWeight: 'bold'}}>Raspberry Pi</span>, <span style={{fontWeight: 'bold'}}>Sensores digitais</span> e <span style={{fontWeight: 'bold'}}>Banco de dados</span>
    <br/><br/><div className='separador'></div>
    <br/><span style={{fontWeight: 'bold'}}>Principais benefícios do Sistema de Controle:</span><br/><br/>
    <ul  style={{ marginLeft: '60px'}}>
        <li>Controle de produção.</li>
        <li>Monitoramento de processos.</li>
        <li>Construção de gráficos de perda e outros indicadores.</li>
    </ul>
    # Gostaria de saber se a Serra Jr pode te ajudar? Contate-nos e peça um orçamento ou agende uma reunião sem compromisso preenchendo os dados do nosso formulário de contato a seguir. #
    <br/><br/><div className='separador'></div></span>

    const textoAuto2 = <span>Automação industrial é a aplicação de técnicas, softwares e/ou equipamentos específicos em um determinado processo com o intuito de torná-lo mais eficiente e autônomo. <br/><br/>A Serra Jr trabalha com a análise e melhorias nas cadeias de produção/serviços. Desenvolvemos softwares e equipamentos customizados que agilizam e/ou proporcionam autonomia nos processos.
    <br/><br/>Principais benefícios da automação:<br/><br/>
    <ul  style={{ marginLeft: '60px'}}>
        <li>Aumenta a eficiência do processo.</li>
        <li>Maximiza a produção com o menor consumo de energia e/ou matérias primas.</li>
        <li>Reduz o esforço ou a interferência humana sobre o processo ou máquina.</li>
    </ul>
    # Gostaria de saber se a Serra Jr pode te ajudar? Contate-nos e peça um orçamento ou agende uma reunião sem compromisso preenchendo os dados do nosso formulário de contato a seguir. #</span>

    function handleShow(key) {
        if (key===1) {
            setTitulo("Sistema de Controle de Variáveis")
            setTexto(textoAuto1)
        }
        else if (key===2) {
            setTitulo("Automação e Controle de Processos")
            setTexto(textoAuto2)
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
            <Automacao1 fechaModal={handleClose} abreModal={handleShow}/>
            <Automacao2 fechaModal={handleClose} abreModal={handleShow}/>
            <Footer/>
        </div>
    )
}

export default Automacao