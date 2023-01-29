import React from 'react';
import { Header, ScoreboardWrapper, Footer } from './containers'

import images from './assets/images'
import './App.css'
import { SideMenu } from './components';

function App() {


    return (
        <>
            <SideMenu />
            <div className="App">

                <Header />
                <ScoreboardWrapper />
                <Footer />
            </div>
        </>
    );
}

export default App;
