import React from 'react';
import './home.css'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";



const Home = () => {
  return (
    <div className='allBorder home'>
      <TopNav />
      <h1 className='title'>I create <span className='beautiful'>beautiful</span> <br /> experiences</h1>
      <p className='text'>I work with people all over the world to create <br />tailor-made webflow experiences</p>
      <p className='bottomText'>Available for freelance work</p>
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
        <a href='https://www.google.com'><span className='center-text'>LINKEDIN <FaArrowTrendUp /></span><AiFillLinkedin className='icon' size='2em' /></a>
        <a href='https://www.google.com'><span className='center-text'>TWITTER <FaArrowTrendUp /></span><FaTwitter className='icon' size='2em' /></a>
        <a href='https://www.google.com'><span className='center-text'>INSTAGRAM <FaArrowTrendUp /></span><IoLogoInstagram className='icon' size='2em' /></a>
      </div>

      <div className='talkBtn'>
        <a href='https://www.google.com' >Let's TALK <FaArrowTrendUp /></a>
      </div>
    </div>
  )
}


export default Home;