import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import {images} from '../../constants';

const abouts = [
  { title: 'Cybersecurity', description: 'I have double majored Cybersecurity and Computer Science. I have an CEH certificate.', imgUrl: images.about01 },
  { title: 'Energy Informatics', description: 'I am interested in how mathematical optimization in the context of computer science can contribute to an effective management of smart energy and power systems', imgUrl: images.about02 },
]
const About = () => {
  return (
    <>
      <h2 className='head-text'>I am your <span>Good Developer</span> <br /> and <span>Good Coworker</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
            whileInview={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About