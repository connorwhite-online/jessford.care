import React, { useRef, useState } from 'react';
import './index.css';
export default function About() {

    const [Certifications] = useState([
        {
            course: 'Death Doula Formation Mentorship',
            org: 'Jill Schock, LA Death Doula',
            date: '2022'
        },
        {
            course: 'Perinatal Mental Health',
            org: 'Maternal Mental Health NOW',
            date: '2022'
        },
        {
            course: 'Pregnancy and Infant Loss Support',
            org: 'SHARE',
            date: '2022'
        },
        {
            course: "The Doula's Doula Mentorship",
            org: 'Maiysha Campbell & Domino Kirke-Badgley',
            date: '2021'
        },
        {
            course: 'Full Spectrum Doula',
            org: 'Birthing Advocacy',
            date: '2020'
        },
        {
            course: 'Cultural Competency in Maternity Care',
            org: 'Shafia Monroe',
            date: '2019'
        },
        {
            course: 'Trauma Informed Care',
            org: 'CEUs with Jesse Remer and Astrid Castro',
            date: '2019'
        },
        {
            course: 'Postpartum Doula',
            org: 'Mother Tree Doula',
            date: '2018'
        },
        {
            course: 'Birth Doula',
            org: 'Mother Tree Doula',
            date: '2017'
        }
    ])
        

    return (
        <div className='about'>
            <div className='page-title'>About</div>
            <hr />
            <div className='introduction'>
                <div className='copy'>
                    <div className='heading'>Introduction</div>
                    <div className='text'>
                    Whether you’re preparing for birth, seeking postpartum care, or facing perinatal loss at any stage, these profound human experiences require tender support and guidance.
                    <br />
                    My approach to doula work is calm, encouraging and adaptive. I believe each experience is unique and will meet you where you are at in order to provide personalized care.
                    <br />
                    You can expect transparency when working with me, and I will work collaboratively to find the best methods and resources that work specifically for you. I will learn, grow and adapt alongside my clients and want you to feel empowered and safe the entire way.
                    <br />  
                    I am passionate that your journey should be cared for with just as much intent no matter the circumstance, and want you to be in enlightened, in control of your body and informed of your choices.
                    <br />
                    Born and raised in the Detroit Metro area, I graduated from The University of Michigan where I received my BFA, focusing on painting and fiber art. I began my birth and postpartum doula career in 2017, expanded into full spectrum care, and am now continuing my education in maternal mental health and healing art therapy.  I am currently based on Tongva Land / Los Angeles, CA, serving people virtually as well. 
                    </div>
                </div>
                <div className='image'>
                    <img className='img' src='./images/about1.png' alt='Biograpical Image of Jess Ford' />
                </div>
            </div>
            <hr />
            <div className='cta'>
                <a href='https://calendly.com/jessfordcare' target="_blank" rel="noopener noreferrer"><button className='btn'>complimentary consultation</button></a>
            </div>
            <hr />
            <div className='certifications'>
                <div className="copy">
                    <div className='heading'>Certifications + Trainings</div>
                    <div className='trainings'>
                        {Certifications.map((cert, index) => (
                            <div className='cert' key={index}>
                                <div className='course'>{cert.course}</div>
                                <div className='org-date'>{cert.org + ' ' + '(' + cert.date + ')'}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="image">
                    <img className='img' src='./images/about2.png' alt='Certifications and Trainings' />
                </div>
            </div>
        </div>
    )
}