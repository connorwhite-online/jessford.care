import React, {useState, useRef, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import gsap from 'gsap';
import './index.css';

export default function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menu = useRef(null);
    const menuTL = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            menuTL.current = gsap.timeline({paused: true});
            menuTL.current.to('.logo', {
                opacity: 0,
            })
            menuTL.current.fromTo(menu.current, {
                height: 'auto',
                backgroundColor: 'transparent',
            }, {
                height: '95dvh',
                backgroundColor: '#1A1D22',
                overflow: 'hidden',
            });
            menuTL.current.to('.links', {
                display: 'flex',
            })
            menuTL.current.to('.navlink', {
                opacity: 1,
            })
        }, menu);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        menuOpen ? menuTL.current.play() : menuTL.current.reverse();
        
    }, [menuOpen, setMenuOpen]);

    const handleMenuClick = () => {
        setMenuOpen(false);
    }

    return (
        <div className="menu" ref={menu}>
            <div className='core'>
                <div className='logo'>
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className='menu-btn'>
                    {menuOpen ? (
                        <CloseRoundedIcon onClick={() => setMenuOpen(false)} style={{ display: 'block', color: 'white' }} />
                    ) : (
                        <MenuRoundedIcon onClick={() => setMenuOpen(true)} style={{ display: 'block' , color: '#1A1D22'}} />
                    )}
                </div>
            </div>
            
            <div className='links'>
                <div className='nav'>
                    <NavLink className='navlink' to='/' onClick={handleMenuClick}>About</NavLink>
                    <NavLink className='navlink' to='/offerings' onClick={handleMenuClick}>Offerings</NavLink>
                    <NavLink className='navlink' to='/testimonials' onClick={handleMenuClick}>Testimonials</NavLink>
                    <NavLink className='navlink' to='/connect' onClick={handleMenuClick}>Connect</NavLink>
                </div>
                <div className='social'>
                    <a href="mailto:jessfordcare@gmail.com" className='link'><EmailOutlinedIcon /></a>
                    <a href="https://www.instagram.com/jessford.care" target="_blank" rel="noopener noreferrer" className='link'><InstagramIcon /></a>
                </div>
            </div>
        </div>
    )
}