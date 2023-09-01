import React, { useRef, useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import './index.css';


export default function Connect() {
    return (
        <div className="connect">
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