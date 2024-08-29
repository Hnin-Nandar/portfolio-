import React from 'react';
import './study.css';
import { GoArrowUpRight } from "react-icons/go";
import { myImage, myImage2 } from '../../assets';

const Study = () => {
    return (
        <div className='study'>
            <div className='studySection1'>
                <div className='col2'>
                    <h6>CASE STUDY</h6>
                    <h1>Korba</h1>
                    <ul>
                        <li><a href='https://www.google.com'>Web design</a></li>
                        <li><a href='https://www.google.com'>Development</a></li>
                    </ul>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat veniam accusantium ab officia vitae odit est explicabo, amet sequi ullam cumque tempora maiores debitis labore quaerat laborum. Quasi, facere temporibus.</p>
                    <a className='text3' href='https://www.google.com'>SEE CASE STUDY<GoArrowUpRight stroke='#170034' fill='#170034' size='0.8em' /></a>
                </div>
                <div className='imgContainer col2'>
                    <img
                        src={myImage} alt='butterfly'
                    />
                </div>
            </div>

            <div className='studySection2'>
                <div className='col2'>
                    <h6>CASE STUDY</h6>
                    <h1>TrailHive</h1>
                    <ul>
                        <li><a href='https://www.google.com'>Concept design</a></li>
                        <li><a href='https://www.google.com'>Brand Identity</a></li>
                    </ul>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat veniam accusantium ab officia vitae odit est explicabo, amet sequi ullam cumque tempora maiores debitis labore quaerat laborum. Quasi, facere temporibus.</p>
                    <a className='text4' href='https://www.google.com'>SEE CASE STUDY<GoArrowUpRight stroke='#E9DEFF' fill='#E9DEFF' size='0.8em' /></a>
                </div>
                <div className='col2 imgContainer'>
                    <img
                        src={myImage2} alt='flower'
                    />
                </div>
            </div>

        </div>
    )
}

export default Study;