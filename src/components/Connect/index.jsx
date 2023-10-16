import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { InlineWidget } from 'react-calendly';
import './index.css';


export default function Connect() {

    const connect = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline();
            tl.from(".page-title", {
                duration: 1,
                opacity: 0,
                clipPath: "inset(0 0 100% 0)",
                ease: "power3.out",
            });
            tl.from("hr", {
                clipPath: "inset(0 100% 0 0)",
                duration: 1,
                ease: "power3.out",
            });
            tl.from(".info, .calendar", {
                opacity: 0,
                stagger: 0.5,
                duration: 1,
                ease: "power3.out",
            });
        }, connect.current);
        return () => ctx.revert();
    }, []);

    return (
        <div className="connect" ref={connect}>
            <div className="page-title">
                Connect
            </div>
            <hr />
            <div className="info">
            All initial consultations are complimentary and welcomed.  We will take this time to explore your needs, create a care plan, and discuss pricing.  Please reach out over email at jessfordcare@gmail.com for any additional questions. 
            </div>
            
            <div className="calendar">
                <InlineWidget url="https://calendly.com/jessfordcare" />
            </div>
        </div>
    )
}