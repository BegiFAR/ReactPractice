import React, { useRef, useState } from "react";
import './portfolio.css'
import IMG1 from '../../assets/port1.webp'
import IMG2 from '../../assets/port2.webp'
import IMG3 from '../../assets/port3.webp'
import IMG4 from '../../assets/port4.webp'
import IMG5 from '../../assets/port5.webp'
import IMG6 from '../../assets/port6.webp'
import {BsArrowBarRight} from 'react-icons/bs'
import {BsArrowBarLeft} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import {EffectCube, Pagination} from "swiper";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Eclipse UI kit for Figma",
        github: "https://github.com/BegiFAR",
        demo: 'https://dribbble.com/shots/19314636-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },
    {
        id: 2,
        image: IMG2,
        title: "Eclipse UI kit for Figma",
        github: "https://github.com/BegiFAR",
        demo: 'https://dribbble.com/shots/19314483-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },
    {
        id: 3,
        image: IMG3,
        title: "Orion UI kit",
        github: "https://github.com/BegiFAR",
        demo: 'https://dribbble.com/shots/19241050-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },
    {
        id: 4,
        image: IMG4,
        title: "Eclipse UI kit for Figma",
        github: "https://github.com/BegiFAR",
        demo: 'https://dribbble.com/shots/19103695-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },
    {
        id: 5,
        image: IMG5,
        title: "Eclipse - Figma dashboard UI kit for data design web apps",
        github: "https://github.com/BegiFAR",
        demo: 'https://dribbble.com/shots/18936871-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },
    {
        id: 6,
        image: IMG6,
        title: "Orion UI kit - Charts templates & infographics in Figma",
        github: "https://github.com/BegiFAR",
        demo: 'https://dribbble.com/shots/18881912-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio' >
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="portfolio-wrapper">
                <Swiper className="container portfolio__container"
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                    
                                    }}
                            
                        modules={[EffectCube, Pagination]}
                        pagination={true}
                        
                >
                    {
                        data.map(({id, image, title, github, demo}) => {
                            return (
                            <SwiperSlide key={id} className='portfolio__item'>

                                    <div className='portfolio__item-image'>
                                            <img src={image} alt={title}/>
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className='btn' target='_blank'>Github</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </div>
                                    
                            </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio

