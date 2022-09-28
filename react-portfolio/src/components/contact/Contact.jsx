import React, { useRef as UseRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const contact = () => {
    const form = UseRef();  

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v7ybfzi', 'template_pcslrj6', form.current, 'lzODliNVmGiKQGFvL')
        
        e.target.reset()
      };

    return (
        <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>mr.kylanthony@gmail.com</h5>
                    <a href="mailto:mr.kylanthony@gmail.com" target='_blank'>Send me a message.</a>
                </article>

                <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Ka Kaayl</h5>
                    <a href="https://m.me/kylnii" target='_blank'>Send me a message.</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+123456789</h5>
                    <a href="https://api.whatsapp.com/send?phone=123456789" target='_blank'>Send me a message.</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your full name" required/>
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea name="Message" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
        </div>
        </section>
    )
}

export default contact
