import React, { useRef, useState, useEffect } from "react";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import "./index.css";

export default function Testimonials()  {

    const [Testimonials] = useState([
        {
            service: "Birth",
            relation: "Client",
            location: "Virtual",
            copy: "We knew Jess was a good fit for us from the first “get-to-know-you” virtual meeting we had with her. We cancelled the second interview we had after meeting her! With so many unknowns, Jess quickly became our friend, family, counselor, cheerleader, & confidant. She provided many resources to meet us where we were at... on all levels - mind, body, spirit. With Jess’ help, I was able to work through fears & feel very safe & confident with our home-birth plan. Jess always made herself available to me, day or night, to just text thoughts & feelings as I went through new challenges weekly & bouts of exhaustion. She continued to send me very helpful resources throughout postpartum, and because she could see how helpful it had been for my husband & I to talk with her as an objective third party, she continued to meet with us to discuss what worked for us & what didn’t, what was “normal,” what we could change the following week, etc. For first time parents, & especially for parents who were caught out of the country & needed help navigating a new birth plan, Jess was an answered prayer! I do not believe we would have had such a smooth & amazing birth had we not worked with her for weeks in advance to prepare us.",
        },
        {
            service: "Birth",
            relation: "Partner",
            location: "Virtual",
            copy: "As the father, I can’t stress enough how beneficial it is to have a good doula. You can be there and support your wife to the best of your ability, but your wife NEEDS a support system-there are too many things that you just don’t have answers or ideas for. I don’t know what we would have done without one; especially Jess-she was an invaluable addition to the team. It was so helpful to have a set of neutral eyes to help us rationalize our thought processes and ground us when overstressed- -she was so helpful and calming. Jess solely filled this role and because of her we had the perfect birthing experience!",
        },
        {
            service: "Birth",
            relation: "Client",
            location: "In-Person",
            copy: "Words cannot express the gratitude I have for Jess. As a first-time mom, I had no clue what to expect going into this experience. Jess assured me that we’d take it step by step and deal with everything as it came along. And that’s exactly what she helped me do.",
        },
        {
            service: "Birth + Postpartum",
            relation: "Client",
            location: "In-Person",
            copy: "Throughout the last few weeks of my pregnancy Jess was able to provide answers about what was expected and normal and then how to prepare for labor. Since the moment my labor started Jess stayed in constant communication with me to answer any questions and provide any support I needed. Eventually the time came when I need in-person support. Jess showed up extremely fast and then stayed by my side until my little one was born. She provided a much-needed source of calm energy and was able to help me focus and breath through my contractions. At no point throughout the experience did she sound stressed out or panicked, which in return helped me remain calm. Once we reached the hospital she continued to stay by my side. She continued to help me focus on my breathing and keep in mind the goals I had for my birth. My goal was to have an non-medicated birth, but I ended up getting the epidural. This is where Jess’s support means the most to me. She encouraged me to do what I felt was necessary, and after the birth she helped reassure me that I made the best decision. Her ability to console me about this, not only during the labor and birth experience, but also during the postpartum period, has meant so much to me.",
        },
        {
            service: "Birth + Postpartum",
            relation: "Client",
            location: "In-Person",
            copy: "I can undoubtedly say that Jess assisted in providing me and my partner an absolutely wonderful birthing experience. She has a strong ability to remain calm and provide support and information. Most of all, I felt like I was able to connect with her and rely on her throughout my entire laboring and postpartum experience.",
        }
    ]);

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial(currentTestimonial === Testimonials.length - 1 ? 0 : currentTestimonial + 1);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(currentTestimonial === 0 ? Testimonials.length - 1 : currentTestimonial - 1);
    };

    console.log(currentTestimonial);

    return (
        <div className="testimonials">
            <div className="page-title">
                Testimonials
            </div>
            <hr />
            <div className="controls">
                <div className="arrow"><ArrowBackIosRounded onClick={prevTestimonial}/></div>
                <div className="counter">{currentTestimonial + 1}/{Testimonials.length}</div>
                <div className="arrow"><ArrowForwardIosRounded onClick={nextTestimonial}/></div>
            </div>
            <div className="testimonial">
                <div className="testimonial-service">{Testimonials[currentTestimonial].service}, ({Testimonials[currentTestimonial].relation})</div>
                <div className="testimonial-location">{Testimonials[currentTestimonial].location}</div>
                <div className="testimonial-copy">{Testimonials[currentTestimonial].copy}</div>
            </div>
        </div>
    )
}