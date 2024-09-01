import React from 'react';
import emailjs from 'emailjs-com';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import './contact.css';


const Contact = () => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (item) => {
    setData({
      ...data,
      [item.target.name]: item.target.value
    });
  }

  const handleSubmit = (item) => {
    item.preventDefault();
    emailjs.sendForm(
      'service_dwnswnb',
      'template_fsz007y',
      item.target,
      'JZtIEuoE6LCtCNEaS'
    ).then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('An error occured. Please try again.');
    });
    setData({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact-section'>
      <div className='allBorder contact'>
        <TopNav />
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className='contact-box'>
            <label htmlFor='name'><strong>Name:</strong></label>
            <input
              type='text'
              id='name'
              name='name'
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='email'><strong>E-mail:</strong></label>
            <input
              type='email'
              id='email'
              name='email'
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='message'><strong>Message:</strong></label>
            <textarea
              id='message'
              name='message'
              value={data.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>

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
        <a href='https://www.linkedin.com/in/hnin-nandar-29b418277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><span className='center-text'>LINKEDIN <FaArrowTrendUp /></span><AiFillLinkedin className='icon' size='2em' /></a>
        <a href='https://www.facebook.com/hnin.nandar.khin2000?mibextid=ZbWKwL'><span className='center-text'>FACEBOOK <FaArrowTrendUp /></span><FaFacebookSquare className='icon' size='2em' /></a>
        <a href='https://www.threads.net/@hnin_nandar.khin'><span className='center-text'>INSTAGRAM <FaArrowTrendUp /></span><IoLogoInstagram className='icon' size='2em' /></a>
      </div>
    </div>
  )
}

export default Contact;