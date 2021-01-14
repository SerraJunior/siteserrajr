import React, {useState} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Web1 from '../components/Web1'
import Web2 from '../components/Web2'
import Modal from '../components/Modal'

function Web() {
    const [mostraModal, setModal] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")

    function handleShow(key) {
        if (key===1) {
            setTitulo("Web sites")
            setTexto("Com um site você garante seu espaço exclusivo na Web, independente se seu empreendimento é pequeno ou grande. Esta é uma maneira de apresentar ao mundo informações, fotos e produtos referentes à sua empresa e/ou serviço. Além disso, estar na internet permite que o seu negócio e você estejam em qualquer lugar do mundo a todo momento. Com a ajuda da Serra Jr., você terá essas vantagens. A partir de uma análise da sua necessidade elaboraremos um site sob medida, com todas as facilidades e requisitos que você precisa. # Gostaria de saber se a Serra Jr pode te ajudar? Contate-nos e peça um orçamento ou agende uma reunião sem compromisso preenchendo os dados do nosso formulário de contato a seguir. #")
        }
        else if (key===2){
            setTitulo("Sistema Web")
            setTexto("O sistema web permite uma visão abrangente dos custos com encargos fiscais, funcionários, montantes reservados para os serviços prestados ou produção do produto, além do controle do estoque e/ou caixa a partir do monitoramento desses dados. Com essas inContatoações a Serrra Jr. elabora um sistema personalizado através do qual é possível saber se há excessos nos gastos, evitando erros humanos e garantindo maior qualidade dos registros e análises. # Gostaria de saber se a Serra Jr pode te ajudar? Contate-nos e peça um orçamento ou agende uma reunião sem compromisso preenchendo os dados do nosso formulário de contato a seguir. #")
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
            <Web1 fechaModal={handleClose} abreModal={handleShow}/>
            <Web2 fechaModal={handleClose} abreModal={handleShow}/>
            <Footer/>
        </div>
    )
}

export default Web