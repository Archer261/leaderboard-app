import React from 'react';
import { Header, ScoreboardWrapper, Footer } from './containers'

import images from './assets/images'
import './App.css'

function App() {


    return (
        <>
            <div className="App">
                <Header />
                <ScoreboardWrapper />
                <Footer />
            </div>
        </>
    );
}

export default App;
