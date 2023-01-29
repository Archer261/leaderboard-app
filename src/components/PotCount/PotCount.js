import React from 'react'
import CountUp from 'react-countup';
import './PotCount.css'

const PotCount = () => {
    return (
        <div className='potCount-container'>
            <p>Pot:</p>
            <h1>$<CountUp end={210} /></h1>
        </div>
    )
}

export default PotCount