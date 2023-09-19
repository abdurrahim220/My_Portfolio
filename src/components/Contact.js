import React from 'react';
import { motion } from 'framer-motion'
import { } from 'react-icons/bs'
import { fadeIn } from '../variants'

const Contact = () => {
  return <section className='lg:section py-16' id='contact'>

    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        

        <motion.div variants={fadeIn('right', 0.3)}
          initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}  className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 -tracking-wider'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
          </div>
        </motion.div>

        <motion.form variants={fadeIn('left', 0.5)}
          initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}  className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 pb-24 items-center'>
          <input className='bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all w-full ' type='text' placeholder='Your Name'/>
          <input className='bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all w-full ' type='text' placeholder='Your Email'/>
          <textarea className='bg-transparent border-b py-12 outline-none placeholder:text-white mb-12 resize-none focus:border-accent transition-all w-full ' placeholder='Your message'></textarea>

          <button className='btn btn-lg'>Send message</button>
        </motion.form>

      </div>

    </div>

  </section>;
};

export default Contact;
