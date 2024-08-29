import React from 'react';
import ReactDOM from 'react-dom';
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
        <a href='#' className='name'>Hnin Nandar</a>
      </div>

      <div className='center-div'>
        <a href='#'>LINKEDIN <FaArrowTrendUp className='Icon' /></a>
        <a href='#'>TWITTER <FaArrowTrendUp className='Icon' /></a>
        <a href='#'>INSTAGRAM <FaArrowTrendUp className='Icon' /></a>
      </div>

      <div className='talkBtn'>
        <a href='#' >Let's TALK</a><FaArrowTrendUp className='Icon' />
      </div>
    </div>
  )
}


export default Home;