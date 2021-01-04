import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjetosMec2 from '../components/ProjetosMec2'
import ProjetosMec3 from '../components/ProjetosMec3'

function ProjetosMec() {
    return (
        <div>
            <Header/>
            <div style={{marginTop: '70px'}}></div>
            <ProjetosMec2/>
            <ProjetosMec3/>
            <Footer/>
        </div>
    )
}

export default ProjetosMec