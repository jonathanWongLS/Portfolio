import React from "react"
import './about.css'
import ME from '../../assets/me_about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Icon" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Bachelor of Software Engineering (Honours) Graduate</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>3 Clients</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>6 Projects</small>
                        </article>
                    </div>
                    <p>
                        A motivated and passionate, Software Engineering graduate with the ability to equip new
                        skills swiftly.
                        <br/><br/>Has basic practical experience with the designing and implementation of user interactive websites with HTML, CSS, JavaScript, ReactJS as well as Java, Spring Boot and Vaadin. 
                        <br/><br/>Highly motivated and inspired to continuously sharpen my skills and grow professionally in front-end development, back-end development and Software Engineering related skills.
                        <br/><br/>Always ready to develop my programming and soft skills in internship training and applicable projects.
                        <br/><br/>Extremely proactive when collaborating in a team to brainstorm creative and innovative solutions which encourage the scaling of businesses.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About