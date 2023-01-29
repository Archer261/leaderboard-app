import React, { useState, useEffect, useRef } from 'react'

import './SideMenu.css'

export default function SideMenu() {
    const [isSideMenu, setSideMenu] = useState(false)
    const open = (isSideMenu) => {
        return setSideMenu(!isSideMenu)
    }
    const domeNode = useRef()
    const updateState = (event) => {
        if (domeNode.current.contains(event.target)) {
            return
        }
        setSideMenu(false)
    }
    useEffect(() => {
        document.addEventListener('mousedown', updateState)
        return () => {
            document.removeEventListener('mousedown', updateState)
        }
    }, [])
    return (
        <>

            <div className="menuBar">
                <span
                    ref={domeNode}
                    className="navIcon"
                    onClick={() => {
                        open(isSideMenu)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        {isSideMenu ? (
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                        ) : (
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                        )}
                    </svg>
                </span>
            </div>
            <div className="sideMenu" style={{ left: isSideMenu ? '0' : '-505px' }}>
                <a href="#"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" /></svg></a>
                <div>
                    <ul>
                        <h2>Starting: January 30th to March 17th.</h2>

                        <li>$30 entry for prize pool.</li>

                        <li>You can pay $5/week OR $30 up front.</li>

                        <li>Please use this link to submit entry: <a href='https://account.venmo.com/u/kjarcher'>VENMO</a></li>

                        <li>Initial weigh-in starts Monday the 30th.</li>
                        <li>Weekly weigh-ins will occur every Friday beginning  2/3.</li>
                        <li>Provide the facilitator an image of your scale with the weigh-in number.</li>
                        <li>If preferred, you may provide only your percentage for the week to the facilitator.</li>

                        <li>Facilitator will post results (% of weigh loss) each week in this channel.</li>
                        <li> Please make healthy decisions. We are here to have fun and motivate each other! 🙌</li>
                    </ul>
                </div>
            </div>

        </>
    )
}