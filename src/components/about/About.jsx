import React from 'react'

import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>          
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloremque tempora ullam dignissimos, commodi consequuntur error consequatur doloribus non similique exercitationem officiis est debitis maiores minus. Vel tenetur quam consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita aspernatur quasi placeat sunt assumenda, voluptatem laboriosam quod exercitationem incidunt quaerat consectetur odit similique maxime velit facilis! Tempora, quis vitae!
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About