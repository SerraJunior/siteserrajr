import React from 'react';
import './style.css';
import Formulario from '../Formulario'

import Modal from 'react-bootstrap/Modal'

function Mod(props) {
  return (
    <section id='Modal'>
      <Modal show={props.showModal} onHide={props.fechaModal}>
        <Modal.Header>
          <Modal.Title> <span className="TituloModal">{props.titulo}</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.texto} <br/><br/><span className="Contato">Contato</span><Formulario/> </Modal.Body>
        <Modal.Footer>
          <button className="botaoEstilizado" onClick={props.fechaModal}>
            Sair
          </button>
        </Modal.Footer>        
      </Modal>
    </section>
  )
}

export default Mod;