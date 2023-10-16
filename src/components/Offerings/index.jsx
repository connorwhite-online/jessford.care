import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import './index.css';

export default function Offerings() {

    const [Offerings] = useState([
        {
            title: "Pregnancy Support",
            location: "in person & virtual",
            intro: "Comprehensive, holistic support starting at any point in pregnancy.  This offering is intended to educate as you navigate your options, to help create and advocate for your birth plan, and to provide tailored support to fit your needs throughout your pregnancy journey.  Topics, resources and details include:",
            details: [
                "Emotional, Mental, and Physical Support",
                "Stages of Pregnancy",
                "Childbirth Preparation",
                "Signs of Labor",
                "Establishing your Care Team",
                "Partner and Family Support",
                "Infant Feeding",
                "Postpartum Planning",
                "Community Resources",
                "Support by phone, email, or text upon beginning work together",
                "Bi-weekly, 1 hour check-ins (or as needed)",
                "Phone and text support in the lead up to and during labor",
            ],
            subhead1: "Note",
            details1: [
                "This offering does not include in-person labor and birth support",
            ],
            pricing: "Pricing varies depending on trimester start date, sliding scale or payment plans are also available.  We will work together to find a care plan that fits your needs.",
        },
        {
            title: "Postpartum Support",
            location: "in person & virtual",
            intro: "Postpartum is forever.  My postpartum support focuses on the birthing person as they go through the most expanding and altering time of their life.  My care places an emphasis on resting and healing the body, prioritizing mental health, warmth and nutrition, community connection and providing practical care as they navigate immediate postpartum and beyond. Support may include but is not limited to:",
            details: [
                "Emotional, Mental, and Physical Support",
                "Nourishing teas, herbs, broths and meals",
                "Light household tasks and cleaning",
                "Caring for your newborn so you can tend to yourself",
                "Birth story processing",
                "Logistical planning",
                "Partner and sibling support",
                "Infant feeding",
                "Community resources",
            ],
            subhead1: "The Golden Month",
            details1: [
                "Daytime support (4 hour shifts) twice a week for your first month postpartum",
                "Continuous, on call phone or text support",
            ],
            subhead2: "The First Forty Days",
            details2: [
                "Daytime support (4 hour shifts) twice a week for your first forty days postpartym",
                "Continuous, on call phone or text support",
            ],
            subhead3: "Mini In-home Session",
            details3: [
                "Daytime support as needed (4 hour shift)",
            ],
            subhead4: "Virtual Support",
            details4: [
                "Continuous text, phone, or video conference support during immediate postpartum throughout the first two years as needed",
            ],
            pricing: "Pricing varies depending on package, sliding scale or payment plans are also available.  We will work together to find a care plan that fits your needs.",
        },
        {
            title: "Perinatal Loss Support",
            location: "in person & virtual",
            intro: "If you’re facing the loss of your baby or seeking abortion support, all care is pro bono or donation-based.  Consultations are encouraged and welcomed, however if you’re faced with a time-sensitive situation please reach out as soon as possible.  Both in-person and virtual care are available. Tender support is available for you and your loved ones for all choices and outcomes. These experiences can be overwhelming, isolating, unique to you, and deserved to be honored. Support may include but is not limited to:",
            details: [
                "Exploring options in any trimester without judgement",
                "Preparing for full-term birth with a fatal diagnosis",
                "Including personal wishes throughout the birth process",
                "Creating mementos of time spent with baby",
                "Exploring lactation options after a loss and practical lactation support",
                "Planning a persoanlized farewell ceremony",
                "Connecting with additional local resources as well as providing national/online resources",
                "Abortion support in any trimester",
                "Ongoing grief support",
            ],
        }
    ]);

    const offerings = useRef(null);

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
            tl.from(".option", {
                stagger: 0.25,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
            tl.from(".heading", {
                duration: 1,
                clipPath: "inset(0 0 100% 0)", 
                opacity: 0,
                ease: "power3.out",
            });
            tl.from(".service-img, .location, .intro, .details, .subhead", {
                opacity: 0,
                duration: 1.25,
                clipPath: "inset(0 0 100% 0)",
                ease: "power3.out",
                stagger: 0.25,
            });
        }, offerings.current);
        return () => ctx.revert();
    }, []);

    const [selectedOffering, setSelectedOffering] = useState(0);

    // set selected offering to the active offering
    const handleOptionClick = (index) => {
        setSelectedOffering(index);
    };
    console.log(selectedOffering);

    return (
        <div className="offerings" ref={offerings}>
            <div className="page-title">
                Offerings
            </div>
            <div className="options">
                <div className={`option ${selectedOffering === 0 ? "active" : "option"}`} onClick={() => handleOptionClick(0)}>
                    Pregnancy
                </div>
                <div className={`option ${selectedOffering === 1 ? "active" : "option"}`} onClick={() => handleOptionClick(1)}>
                    Postpartum
                </div>
                <div className={`option ${selectedOffering === 2 ? "active" : "option"}`} onClick={() => handleOptionClick(2)}>
                    Perinatal Loss
                </div>
            </div>
            <hr />
            <div className="offering">
                <div className="main">
                    <div className="heading">{Offerings[selectedOffering].title}</div>
                    <div className="location">{Offerings[selectedOffering].location}</div>
                    <div className="intro">{Offerings[selectedOffering].intro}</div>
                    <div className="details">
                        {Offerings[selectedOffering].details.map((detail, index) => (
                            <div className="detail" key={index}>- {detail}</div>
                        ))}
                    </div>
                    {Offerings[selectedOffering].subhead1 !== undefined && (
                        <div className="subhead">{Offerings[selectedOffering].subhead1}</div>
                    )}
                    {Offerings[selectedOffering].details1 !== undefined && (
                        <div className="details">
                            {Offerings[selectedOffering].details1.map((detail, index) => (
                                <div className="detail" key={index}>- {detail}</div>
                            ))}
                        </div>
                    )}
                    {Offerings[selectedOffering].subhead2 !== undefined && (
                        <div className="subhead">{Offerings[selectedOffering].subhead2}</div>
                    )}
                    {Offerings[selectedOffering].details2 !== undefined && (
                        <div className="details">
                            {Offerings[selectedOffering].details2.map((detail, index) => (
                                <div className="detail" key={index}>- {detail}</div>
                            ))}
                        </div>
                    )}
                    {Offerings[selectedOffering].subhead3 !== undefined && (
                        <div className="subhead">{Offerings[selectedOffering].subhead3}</div>
                    )}
                    {Offerings[selectedOffering].details3 !== undefined && (
                        <div className="details">
                            {Offerings[selectedOffering].details3.map((detail, index) => (
                                <div className="detail" key={index}>- {detail}</div>
                            ))}
                        </div>
                    )}
                    {Offerings[selectedOffering].subhead4 !== undefined && (
                        <div className="subhead">{Offerings[selectedOffering].subhead4}</div>
                    )}
                    {Offerings[selectedOffering].details4 !== undefined && (
                        <div className="details">
                            {Offerings[selectedOffering].details4.map((detail, index) => (
                                <div className="detail" key={index}>- {detail}</div>
                            ))}
                        </div>
                    )}
                    <div className="pricing">{Offerings[selectedOffering].pricing}</div>
                </div>
                <div className="service-img">
                        <img src={require(`./offerings${[selectedOffering]}.png`)} alt={Offerings[selectedOffering].title} />
                </div>
            </div>
        </div>
    )
}