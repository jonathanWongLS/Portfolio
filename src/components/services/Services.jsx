import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div></div>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop complete web applications with both front-end and back-end components.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure seamless integration between front-end and back-end systems.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design and implement user interfaces using HTML5, CSS3, JavaScript, and ReactJS.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create responsive and interactive web pages.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop and maintain server-side logic with Java Spring Boot.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement secure APIs and authentication systems (e.g., JWT).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design intuitive and user-friendly interfaces.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Utilize AWS EC2 for hosting back-end servers.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manage databases with AWS RDS and deploy static websites on AWS S3.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Containerize applications using Docker.</p>
            </li>

          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <div></div>
      </div>
    </section>
  )
}

export default Services