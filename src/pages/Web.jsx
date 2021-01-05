import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Web1 from '../components/Web1'

function Web() {
    return (
        <div>
            <Header/>
            <div style={{marginTop: '70px'}}></div>
            <Web1/>
            <Footer/>
        </div>
    )
}

export default Web