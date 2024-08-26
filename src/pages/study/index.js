import React from 'react';
import './study.css';
import myImage from './unnamed.jpg';
import { GoArrowUpRight } from "react-icons/go";

const Study = () => {
    return (
        <div className='studySection'>
            <div className='col2'>
                <h6>CASE STUDY</h6>
                <h1>Korba</h1>
                <ul>
                    <li><a href='#'>Web design</a></li>
                    <li><a href='#'>Development</a></li>
                </ul>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Repellat veniam accusantium ab officia vitae odit est<br /> explicabo, amet sequi ullam cumque tempora maiores debitis<br /> labore quaerat laborum. Quasi, facere temporibus.</p>
                <ul>
                    <li><a href='#'><span className='text3'>SEE CASE STUDY</span></a><GoArrowUpRight stroke='black' fill='black' size='0.8em' /></li>
                </ul>
            </div>
            <div className='col2'>
                <img src={myImage} alt='butterfly' />
            </div>

        </div>
    )
}

export default Study;