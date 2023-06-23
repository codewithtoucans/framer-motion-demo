import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        x: '100vw'
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const childrenVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

const Order = ({pizza, setShowModal}) => {
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 3000)
    }, [setShowModal])
    return (
        <motion.div className="container order" variants={variants} exit='exit' initial='initial' animate='animate'>
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childrenVariants}>You ordered a {pizza.base} pizza with:</motion.p>
            {pizza.toppings.map(topping => <motion.div variants={childrenVariants}
                                                       key={topping}>{topping}</motion.div>)}
        </motion.div>
    )
}

export default Order;