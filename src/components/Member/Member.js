import React from 'react'

import './Member.css'

import images from '../../assets/images'
import { motion } from "framer-motion";

const checkPosition = (index, score) => {
    if (score !== 0) {
        switch (index) {
            case 0:
                return "member-wrapper-first"
                break;
            case 1:
                return "member-wrapper-second"
                break;
            case 2:
                return "member-wrapper-third"
                break;

            default:
                break;
        }
    } else {
        return "member-wrapper"
    }
}

const Member = ({ image, name, score, isActive, placement }) => {
    return (

        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className={checkPosition(placement, score)}>
                {(placement === 0 && score !== 0) &&
                    <img src={images.gold} className="placement-img" />
                }
                {(placement === 1 && score !== 0) &&
                    <img src={images.silver} className="placement-img" />
                }
                {(placement === 2 && score !== 0) &&
                    <img src={images.bronze} className="placement-img" />
                }
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className={(isActive) ? "member-image-active" : "member-image"}>
                        <img src={image} />
                    </div>
                </motion.div>

                <h1 className='member-name'>{name}</h1>
                <div className='member-percent'>
                    {score}%
                </div>

            </div>
        </motion.div>
    )
}

export default Member