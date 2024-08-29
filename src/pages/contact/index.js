import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import './contact.css';

const Contact = () => {
  return (
    <div className='border bottom'>
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
        <a href='#' className='name'>Hnin Nandar</a>
      </div>

      <div className='center-div'>
        <a href='#'>LINKEDIN <FaArrowTrendUp className='Icon' /></a>
        <a href='#'>TWITTER <FaArrowTrendUp className='Icon' /></a>
        <a href='#'>INSTAGRAM <FaArrowTrendUp className='Icon' /></a>
      </div>
    </div>
  )
}

export default Contact;