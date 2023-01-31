import React from 'react'
import CountUp from 'react-countup';
import images from '../../assets/images';
import './PotCount.css'

const PotCount = (potNumber) => {
    console.log(potNumber)
    return (
        <div className='potCount-container'>
            <img src={images.potImg} alt="prize-pot" />
            <h1>$<CountUp end={300} /></h1>
        </div>
    )
}

export default PotCount
