import React from 'react';
import {motion} from "framer-motion";

const variants = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1
        }
    }
}

const Header = () => {
  return (
    <header>
      <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{type: 'tween'}} className="logo" drag dragElastic={(1)} dragConstraints={{top:0, left:0, bottom:0, right:0}}>
        <motion.svg variants={variants} initial='hidden' animate='visible' className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
              variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
              variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div initial={{y:'-100vh'}} animate={{y: 0}} className="title">
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;