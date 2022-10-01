import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JONATHAN WONG</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jonathan-wong-123372130/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/jonathanWongLS" target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href="https://www.instagram.com/jon_w01/"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JONATHAN WONG. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer