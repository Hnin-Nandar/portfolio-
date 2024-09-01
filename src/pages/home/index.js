import React from 'react';
import './home.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



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
        <a href='https://www.linkedin.com/in/hnin-nandar-29b418277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><span className='center-text'>LINKEDIN <FaArrowTrendUp /></span><AiFillLinkedin className='icon' size='2em' /></a>
        <a href='https://www.facebook.com/hnin.nandar.khin2000?mibextid=ZbWKwL'><span className='center-text'>FACEBOOK <FaArrowTrendUp /></span><FaFacebookSquare className='icon' size='2em' /></a>
        <a href='https://www.threads.net/@hnin_nandar.khin'><span className='center-text'>INSTAGRAM <FaArrowTrendUp /></span><IoLogoInstagram className='icon' size='2em' /></a>
      </div>

      <div className='talkBtn'>
        <a href='https://t.me/yourusername/@hnin_nandar_khin_1' >Let's TALK <FaArrowTrendUp /></a>
      </div>
    </div>
  )
}


export default Home;