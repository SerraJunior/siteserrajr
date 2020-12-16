import React from "react"
import "./style.css"
import Formulario from "../Formulario"
import Mapa from '../Mapa'

function Contatos() {

    return (
        <section id='secaoContato'>
            <h1 className='tituloSecoes'> Contatos </h1>
            <div className='linha'></div>
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Mapa />
                    <Formulario />
                </div>
            </div>
        </section>
    )
}

export default Contatos