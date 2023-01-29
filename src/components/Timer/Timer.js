import React, { useEffect, useState } from "react";

import './Timer.css';

const Timer = ({ deadline }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    };

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log(time);
        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);

        return () => getTimeUntil(deadline);
    }, [deadline]);

    return (
        <div className="show-counter">
            <div className="Clock-days">{leading0(days)} <span>Days</span></div>
            <div className="Clock-hours">{leading0(hours)} <span>Hours</span></div>
            <div className="Clock-minutes">{leading0(minutes)} <span>Minutes</span></div>
            <div className="Clock-seconds">{leading0(seconds)} <span>Seconds</span></div>
        </div>
    );
};

export default Timer;
