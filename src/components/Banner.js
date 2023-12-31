import React from 'react';

import image from '../assets/avatar.svg'

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold loading-[0.8]  mb-6'>Md ABDUR <span>RAHIM</span></motion.h1>
          <motion.div   variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] uppercase font-secondary font-semibold loading-[1]'>
            <span className='text-white mr-4'>
              I am a
            </span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Programmer',
              2000,
              'Youtuber',
              2000
            ]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
          </motion.div>
          <motion.p   variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
          Welcome to my portfolio!!! I am a creative MERN Stack Web Developer based in Bangladesh, and I'm very passionate and dedicated to my work.... 
          </motion.p>
          <motion.div   variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>
              Contact Me
            </button>
            <Link to='' className='text-gradient btn-link'>
              My Portfolio
            </Link>
          </motion.div>
          <motion.div   variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <Link to=''>
              <FaGithub />
            </Link>
            <Link to=''>
              <FaLinkedin />
            </Link>
            <Link to=''>
              <FaFacebook />
            </Link>

          </motion.div>
        </div>
        {/* image? */}
        <motion.div   variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={image} alt='' />
        </motion.div>
      </div>
    </div>

  </div>;
};

export default Banner;
