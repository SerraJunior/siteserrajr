import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Web1 from '../components/Web1'
import Web2 from '../components/Web2'

function Web() {
    return (
        <div>
            <Header/>
            <Web1/>
            <Web2 />
            <Footer/>
        </div>
    )
}

export default Web