import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
    return (
        <section className='' id='skills'>
            <h2 className='text-center text-3xl font-extrabold mt-7'>Skills</h2>
            <h3 className='text-center'>My technical Level</h3>

            <div className='grid grid-cols-2 justify-center mt-8 gap-12 mx-24'>
                <Frontend />
                <Backend />
            </div>

        </section>
    )
}

export default Skills