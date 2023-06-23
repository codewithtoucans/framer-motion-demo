import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div initial={{x: '100vw', opacity: 0}} animate={{x: 0, opacity: 1, transition:{duration: 1}}} exit={{x:'-100vw', transition:{ease: 'easeInOut'}}}  className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li whileHover={{scale: 1.2, color: 'yellow', originX: 0}} key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div initial={{x: '-100vw'}} animate={{x: 0}} className="next">
          <Link to="/toppings">
            <motion.button whileHover={{scale: 1.1, textShadow: '0px 0px 8px rgb(255,255,255)', boxShadow: '0px 0px 8px rgb(255,255,255)'}}>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;