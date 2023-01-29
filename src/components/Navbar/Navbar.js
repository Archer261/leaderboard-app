import React from 'react'

import './Navbar.css'
import PotCount from '../PotCount/PotCount'
import images from '../../assets/images'

const Navbar = () => {
    return (
        <div className='nav-grid'>
            <img src={images.logo} className='header-wrapper-img' />
            <img src={images.Leaderboard} className='leaderboard-img' />
            <PotCount />
        </div>
    )
}

export default Navbar