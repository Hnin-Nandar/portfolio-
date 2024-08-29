import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='allBorder contact'>
        <TopNav />
        <h1 className='title'>Interesting in <br /> working <span className='beautiful'>together?</span></h1>
        <p className='bottomText2'>&copy;2023 - All Rights Reserved</p>
        <p className='bottomText3'>Available for freelance work</p>
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
        <a href='https://www.google.com'><span className='center-text'>LINKEDIN <FaArrowTrendUp /></span><AiFillLinkedin className='icon' size='2em' /></a>
        <a href='https://www.google.com'><span className='center-text'>TWITTER <FaArrowTrendUp /></span><FaTwitter className='icon' size='2em' /></a>
        <a href='https://www.google.com'><span className='center-text'>INSTAGRAM <FaArrowTrendUp /></span><IoLogoInstagram className='icon' size='2em' /></a>
      </div>
    </div>
  )
}

export default Contact;