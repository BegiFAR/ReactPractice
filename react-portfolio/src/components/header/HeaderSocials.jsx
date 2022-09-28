import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
            <a href="https://github.com/BegiFAR" target="blank"><BsGithub/></a>
            <a href="https://youtube.com" target="blank"><BsYoutube/></a>
        </div>
    )
}

export default HeaderSocials
