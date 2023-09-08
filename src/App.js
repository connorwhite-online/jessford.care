import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './App.css';

import Menu from './components/Menu';
import About from './components/About';
import Offerings from './components/Offerings';
import Testimonials from './components/Testimonials';
import Connect from './components/Connect';

function App() {

  const appRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({paused: false});
      tl.fromTo('.loader', {
        display: 'none',
      }, {
        display: 'flex',
      }, 0);
      tl.fromTo('.loader-img', {
        visibility: 'hidden',
        opacity: 0,
      }, {
        visibility: 'visible',
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      }, 1);
      tl.fromTo('.loader-title', {
        clipPath: 'inset(0 100% 0 0)',
      }, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1, 
        ease: 'power2.inOut',
      }, 1);
      tl.fromTo('.loader-subtitle', {
        clipPath: 'inset(0 100% 0 0)',
      }, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1,
        ease: 'power2.inOut',
      }, 2);
      tl.fromTo('.loader-copy', {
        clipPath: 'inset(0 0% 0 0)',
      }, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1,
        ease: 'power2.inOut',
      }, 6);
      tl.fromTo('.loader-img', {
        opacity: 1,
      }, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, 6);
      tl.fromTo('.loader', {
        display: 'flex',
      }, {
        display: 'none',
      }, 7);
      tl.fromTo('.site', {
        display: 'none',
      }, {
        display: 'block',
      }, 7);
    }, appRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <div className='App' ref={appRef}>
      <div className='loader'>
        <div className='loader-copy'>
          <div className='loader-title'>Full Spectrum Doula</div>
          <div className='loader-subtitle'>Nurturing support in Los Angeles, CA and Beyond</div>
        </div>
        <div className='loader-img'>
          <img src='./images/intro.png' alt='introduction image' />
        </div>
      </div>
      <div className='site'>
        <Menu />
        <Routes>
            <Route path="/" exact element={<About />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
