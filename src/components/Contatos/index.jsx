import React from "react"
import "./style.css"
import Formulario from "../Formulario"
import Mapa from '../Mapa'

function Contatos() {

    return (
        <section id='secaoContato'>
            <div className='marginHorizontal'>
                <h1 className='tituloSecoes'> Contatos </h1>
                <div className='linha'></div>
                <div className='contatosContainer'>
                    <Mapa />
                    <Formulario />
                </div>
            </div>
        </section>
    )
}

export default Contatos