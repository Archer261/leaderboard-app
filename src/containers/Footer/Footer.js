import React from 'react'
import { Timer } from '../../components'

import './Footer.css'

const Footer = () => {


    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    console.log(dateTimeAfterThreeDays)

    return (
        <div className='footer-wrapper'>
            <Timer targetDate={dateTimeAfterThreeDays} />
        </div>
    )
}

export default Footer