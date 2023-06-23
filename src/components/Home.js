import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import Loading from "./loading";

const Home = () => {
    return (
        <>
            <motion.div exit={{x: '-100vw', transition: {ease: 'easeInOut'}}} initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 1}}} className="home container">
                <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}}>
                    Welcome to Pizza Joint
                </motion.h2>
                <Link to="/base">
                    <motion.button whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 8px rgb(255,255,255)',
                        boxShadow: '0px 0px 8px rgb(255,255,255)'
                    }} transition={{duration: 1, yoyo: Infinity}}>
                        Create Your Pizza
                    </motion.button>
                </Link>
            </motion.div>
            <Loading/>
        </>
    )
}

export default Home;