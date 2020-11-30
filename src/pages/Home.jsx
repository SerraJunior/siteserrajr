import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Mission from '../components/Mission'

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Mission/>
            <Services/>
        </div>
    )
}

export default Home