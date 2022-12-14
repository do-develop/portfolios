import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100, 0], opcacity: [0, 1]}}
        transition={{duration: 1}}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{marginLeft: 20}}>
              <p className='p-text'><span>👋</span> Hello, I am</p>
              <h1 className='head-text'>Doyoung</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>I enjoy learning new technology</p>
            <p className='p-text'>I like finding solution and building stuff!</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{opcacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} className="profile_img" alt="profile_bg" />
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.python, images.react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header