import React, {useState} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Automacao1 from '../components/Automacao1'
import Modal from '../components/Modal'

function Automacao() {
    const [mostraModal, setModal] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")

    function handleShow(key) {
        if (key===1) {
            setTitulo("Sistema de Controle de Variáveis")
            setTexto("Historicamente, nos meados das décadas de 70 e 80, com o avanço da eletrônica e o surgimento dos microprocessadores, o computador se tornou uma peça chave nos diversos setores industriais. Surgiram também os primeiros sistemas supervisores que destina-se à captura de informações de um processo de produção e sua armazenagem em um determinado banco de dados. As informações vêm de sensores que capturam dados específicos (conhecidos como variáveis de processo) da planta industrial. A Serra Jr trabalha na elaboração de projetos de software de supervisão. Nossos softwares monitoram em tempo real a produção utilizando Arduino, Raspberry Pi, Sensores digitais e Banco de dados")
        }
        else if (key===2) {
            setTitulo("")
            setTexto("")
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
            <Footer/>
        </div>
    )
}

export default Automacao