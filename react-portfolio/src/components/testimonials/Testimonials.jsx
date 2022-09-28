import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: "Albus Dumbledore",
        review: "As much money and life as you could want! The two things most human beings would choose above all — the trouble is, humans do have a knack of choosing precisely those things that are worst for them.",
    },
    {
        avatar: AVTR2,
        name: "Lord Voldemort",
        review: "Give me Harry Potter. Do this and none shall be harmed. Give me Harry Potter, and I shall leave Hogwarts untouched. Give me Harry Potter, and you will be rewarded. You have one hour.",
    },

    {
        avatar: AVTR3,
        name: "Severus Snape",
        review: "The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before. You are fighting that which is unfixed, mutating, indestructible.",
    },

    {
        avatar: AVTR4,
        name: "Gellert Grindelwald",
        review: "Magic blooms... only in rare souls. Still, we must skulk in shadows. But the old ways serve us no longer. With or without you, I’ll burn down their world. There is nothing you can do to stop me.",
    
    },
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Instructor</h5>
            <h2>Reviews</h2>

            <Swiper className="container testimonials__container"
                     modules={[ Pagination,]}
                     spaceBetween={40}
                     slidesPerView={1}
                     loop={true}
                     pagination={{ clickable: true }}
                     
            >
                    
                {
                    data.map(({avatar, name, review }, index) =>{
                        return(
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar}/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>    
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
