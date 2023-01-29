import React from 'react'
import { Timer } from '../../components'

import './Footer.css'

const Footer = () => {

    let deadline = "march, 17, 2023";

    return (
        <div className='footer-wrapper'>
            <h2>Week 1</h2>
            <Timer deadline={deadline} />
        </div>
    )
}

export default Footer