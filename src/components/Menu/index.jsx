import React, {useState, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import './index.css';

export default function Menu() {
    return (
        <div className="menu">
            <div className='logo'>
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" />
            </div>
            <div className='links'>
                <div className='nav'>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/about'>Offerings</NavLink>
                    <NavLink to='/contact'>Testimonials</NavLink>
                    <NavLink to='/projects'>Connect</NavLink>
                </div>
                <div className='social'>
                    {/* <a href="mailto:connorwhitepdx@gmail.com" className='link'><EmailOutlinedIcon /></a>
                    <a href="https://www.instagram.com/connorwhite.online" target="_blank" rel="noopener noreferrer" className='link'><InstagramIcon /></a> */}
                </div>
            </div>
        </div>
    )
}