import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import './home.css'

const Home = () => {
  return (
    <div className='border'>
      <div className='allBorder home'>
        <TopNav />
        <h1 className='title'>I create <span className='beautiful'>beautiful</span> <br /> experiences</h1>
        <p className='text'>I work with people all over the world to create <br />tailor-made webflow experiences</p>
        <p className='bottomText'>Available for freelance work</p>
      </div>
    </div>
  )
}

const TopNav = () => {
  return (
    <div className='mainNav'>
      <div>
        <a href='https://www.google.com' className='name'>Hnin Nandar</a>
      </div>

      <div className='center-div'>
        <a href='https://www.google.com'>LINKEDIN <FaArrowTrendUp className='Icon' /></a>
        <a href='https://www.google.com'>TWITTER <FaArrowTrendUp className='Icon' /></a>
        <a href='https://www.google.com'>INSTAGRAM <FaArrowTrendUp className='Icon' /></a>
      </div>

      <div className='talkBtn'>
        <a href='https://www.google.com' >Let's TALK</a><FaArrowTrendUp className='Icon' />
      </div>
    </div>
  )
}


export default Home;