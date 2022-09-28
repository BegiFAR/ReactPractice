import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className='footer__logo'>KakaayL</a>

            <ul className='permalinks'>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com/kylnii"><FiFacebook/></a>
                <a href="https://instagram.com"><FaInstagram/></a>
                <a href="https://twitter.com"><FiTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; KakaayL Nii Portfolio. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer


