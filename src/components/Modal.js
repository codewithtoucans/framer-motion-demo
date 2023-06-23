import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";

const backdrop = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const modal = {
    hidden: {
        opacity: 0,
        y: '-100vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5
        }
    }
}

const Modal = ({showModal, setShowModal}) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div variants={backdrop} initial='hidden' animate='visible' exit='hidden' className='backdrop'>
                    <motion.div variants={modal} className='modal'>
                        <p>Want to make another pizza?</p>
                        <Link to='/'>
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence>
    )
}

export default Modal