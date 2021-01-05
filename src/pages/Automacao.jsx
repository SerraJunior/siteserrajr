import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Automacao1 from '../components/Automacao1'

function Automacao() {
    return (
        <div>
            <Header/>
            <div style={{marginTop: '70px'}}></div>
            <Automacao1/>
            <Footer/>
        </div>
    )
}

export default Automacao