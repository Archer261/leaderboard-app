import React, { useState, useEffect } from 'react'
import { client } from '../../client'

import './Navbar.css'
import PotCount from '../PotCount/PotCount'
import images from '../../assets/images'

const Navbar = () => {

    const [potCountNumber, setPotCountNumber] = useState([]);

    useEffect(() => {
        const potCountNumberQuery = '*[_type == "tracking"]';

        client.fetch(potCountNumberQuery)
            .then((data) => {
                setPotCountNumber(data);
            })
    }, [])


    return (
        <div className='nav-grid'>
            <img src={images.logo} className='header-wrapper-img' />
            <img src={images.Leaderboard} className='leaderboard-img' />
            <PotCount potNumber={potCountNumber.potCount} />
        </div>
    )
}

export default Navbar