import React, {useState, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import gsap from 'gsap';
import './index.css';

export default function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="menu">
            <div className='logo'>
                <img src="./images/logo.png" alt="logo" />
            </div>
            <div className='menu-btn'>   
                <MenuRoundedIcon onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <div className='links'>
                <div className='nav'>
                    <NavLink className='navlink' to='/'>About</NavLink>
                    <NavLink className='navlink' to='/offerings'>Offerings</NavLink>
                    <NavLink className='navlink' to='/testimonials'>Testimonials</NavLink>
                    <NavLink className='navlink' to='/connect'>Connect</NavLink>
                </div>
                <div className='social'>
                    <a href="mailto:jessfordcare@gmail.com" className='link'><EmailOutlinedIcon /></a>
                    <a href="https://www.instagram.com/jessford.care" target="_blank" rel="noopener noreferrer" className='link'><InstagramIcon /></a>
                </div>
            </div>
            
        </div>
    )
}