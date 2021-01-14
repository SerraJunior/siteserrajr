import React, { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjetosMec2 from '../components/ProjetosMec2'
import ProjetosMec3 from '../components/ProjetosMec3'
import Modal from '../components/Modal'

function ProjetosMec() {
    const [mostraModal, setModal] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")

    function handleShow(key) {
        if (key===1) {
            setTitulo("")
            setTexto("")
        }
        else if (key===2) {
            setTitulo("Prototipagem")
            setTexto("O uso de protótipos pode ser uma excelente ferramenta para auxiliar no processo de especificação funcional, principalmente porque eles representam um modelo simplificado do produto final. A Serra Jr. elabora protótipos utilizando a impressão 3D proporcionando ao cliente:")
        }
        else if (key===3){
            setTitulo("Projetos De Máquina")
            setTexto("A Serra Jr realiza projetos de desenvolvimento de máquinas a partir do zero ou otimizações dos já existentes, avaliando a viabilidade técnica de todos os seus componentes. Através de cálculos, simulações computacionais, estudo de materiais e de sistemas auxiliares é elaborado um relatório e um manual de fabricação, possibilitando a obtenção de patente da peça ou do equipamento idealizado.")
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
            <ProjetosMec2 fechaModal={handleClose} abreModal={handleShow}/>
            <ProjetosMec3 fechaModal={handleClose} abreModal={handleShow}/>
            <Footer/>
        </div>
    )
}

export default ProjetosMec