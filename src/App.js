import React from 'react'

import {Footer, Blog, Possibility,Features, WhatMoonNow, Header} from './container'
import {CTA, Brand, Navbar} from './components'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatMoonNow />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            
        
        </div>
    )
}

export default App
