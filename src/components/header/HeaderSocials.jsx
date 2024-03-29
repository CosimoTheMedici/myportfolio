import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaDribbble} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https:linkedin.com' target="_blank"><FaGithub /></a>
        <a href='https:linkedin.com' target="_blank"><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials