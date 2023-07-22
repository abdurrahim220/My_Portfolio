import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import "./style.css"


const Backend = () => {
    return (
        <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
            className='border-2 rounded-2xl px-8 py-16'>
            <motion.h2
                variants={fadeIn('left', 0.4)}
                initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.4 }}
                className='skill title text-2xl font-semibold text-center mb-2'>
                Backend Developer
            </motion.h2>

            <div className='skill_box '>
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.4 }}
                    className='skill_group flex justify-center gap-10'>
                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>NODE JS</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>FIREBASE</h3>
                            <p>Advance</p>
                        </div>
                    </div>


                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>ExpressJS</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>Mongodb</h3>
                            <p>Advance</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>MYSQL</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    )
}

export default Backend