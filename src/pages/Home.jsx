import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Portifolio from '../components/Portifolio'
import Mission from '../components/Mission'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Mission />
            <Services />
            <Portifolio />
            <Footer />
        </div>
    )
}

export default Home