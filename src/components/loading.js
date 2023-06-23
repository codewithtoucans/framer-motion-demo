import React from "react";
import {motion, useCycle} from "framer-motion";

const variants = {
    animationOne: {
        y: [20, -20],
        x: 0,
        transition: {
            duration: 0.3,
            y: {
                yoyo: Infinity
            }
        }
    },
    animationTwo: {
        x: [20, -20],
        y: 0,
        transition: {
            duration: 0.3,
            x: {
                yoyo: Infinity
            }
        }
    },
}

const Loading = () => {
    const [animation, setAnimation] = useCycle('animationOne', 'animationTwo')
    return (
        <>
            <motion.div className='loader' variants={variants} animate={animation}></motion.div>
            <motion.span initial={{y: '100vh', opacity: 0}} animate={{y: 0, opacity: 1, transition:{duration: 1}}} className='loader-span' onClick={() => setAnimation()}>Cycle Loader</motion.span>
        </>
    )
}

export default Loading