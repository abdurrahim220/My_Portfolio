import React from 'react';

import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscicip asie. maioures queia auw expedsakj ksdnmf',
    link: 'Learn More'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscicip asie. maioures queia auw expedsakj ksdnmf',
    link: 'Learn More'
  },
  {
    name: 'Competetive porgrammer',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscicip asie. maioures queia auw expedsakj ksdnmf',
    link: 'Learn More'
  },
  {
    name: 'Competetive porgrammer',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscicip asie. maioures queia auw expedsakj ksdnmf',
    link: 'Learn More'
  },
]

const Services = () => {
  return <div className='section' id='services'>

    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>


        <motion.div variants={fadeIn('right', 0.3)}
          initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <div className='h2 text-accent mb-6'>What I do</div>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Font-end Development over 5 years of experience</h3>
          <button className='btn btn-sm'>See My Work</button>
        </motion.div>


        <motion.div variants={fadeIn('left', 0.5)}
          initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
          <div >
            {services.map((service, index) => {
              const { name, description, link } = service
              return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h1 className='text-[20px] tracking-wide font-primary font-semibold mb-6'>{name}</h1>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link to='' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </Link>
                  <Link className='text-gradient text-sm'>{link}</Link>
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Services;
