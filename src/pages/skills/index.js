import React from 'react';
import './skill.css';

const Skill = () => {
  return (
    <div className='container'>
      <div class="col ">
        <h1>Development</h1>
        <p className='text2'>I specialize in developing websites using Webflow, a powerful platform that allows for easy customization and responsive design. I have experience builing websites for a variety of industries, from small business to large corporations. My focus is always on creating functional and smooth websites that are accessible and generate traffic.</p>
        <ul>
          <li>
            <span><a href='#'>Webflow</a></span>
          </li>
          <li>
            <span><a href='#'>Development</a></span>
          </li>
        </ul>
      </div>
      <div class="col ">
        <h1>Art direction</h1>
        <p className='text2'>Art direction is the process of bringing together all of the creative elements of a project to create a cohesive and visually stunning end product. I work with clients to develop a concept and bring it to life through art direction. I believe that attention to detail and a clear vision are key to creating truly memorable designs.</p>
        <ul>
          <li>
            <span><a href='#'>concept design</a></span>
          </li>
          <li>
            <span><a href='#'>Brand identity</a></span>
          </li>
        </ul>
      </div>

    </div >
  )
}

export default Skill;


