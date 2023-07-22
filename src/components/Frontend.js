import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import { BiBadgeCheck } from 'react-icons/bi';

import "./style.css"

const Frontend = () => {
    return (
        <motion.div
        variants={fadeIn('right',0.3)}
      initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
        className='border-2 rounded-2xl px-8 py-16'>
            <motion.h2
            variants={fadeIn('right',0.4)}
            initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.4}}
            className='skill title text-2xl font-semibold text-center mb-2'>
                Frontend Developer
            </motion.h2>

            <div className='skill_box flex justify-center gap-x-10 '>
                <motion.div
                variants={fadeIn('right',0.4)}
                initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.4}}
                className='skill_group grid items-start gap-y-4'>
                    <div className='skill_data'>
                        <BiBadgeCheck className='' />

                        <div>
                            <h3 className=''>HTML</h3>
                            <p>Basic</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>CSS</h3>
                            <p>Advance</p>
                        </div>
                    </div>


                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>JavaScript</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>BOOTSTRAP</h3>
                            <p>Advance</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>TAILWIND CSS</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>

                    <div className='skill_data'>
                        <BiBadgeCheck />

                        <div>
                            <h3 className=''>REACT</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>


                </motion.div>
            </div>
        </motion.div>
    )
}

export default Frontend