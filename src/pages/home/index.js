import React from 'react';
import ReactDOM from 'react-dom';
import { FaArrowTrendUp } from "react-icons/fa6";
import './home.css'

const Home = () => {
  return (
    <div className='allBorder'>
      <TopNav />
      <h1 className='title'>I create <span className='beautiful'>beautiful</span> <br /> experiences</h1>
      <p className='text'>I work with people all over the world to create <br />tailor-made webflow experiences</p>
      <p className='bottomText'>Available for freelance work</p>

    </div>
  )
}

const TopNav = () => {
  return (
    <ul className='mainNav'>
      <li><a href='#' className='name'>Hnin Nandar</a></li>
      <li><a href='#'>LINKEDIN</a><FaArrowTrendUp className='Icon' /></li>
      <li><a href='#'>TWITTER</a><FaArrowTrendUp className='Icon' /></li>
      <li><a href='#'>INSTAGRAM</a><FaArrowTrendUp className='Icon' /></li>
      <li className='talkBtn'><a href='#'>Let's TALK</a><FaArrowTrendUp className='Icon' /></li>
    </ul>
  )
}


export default Home;