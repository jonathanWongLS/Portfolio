import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:email@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>(+60)017-380-9738</h5>
            <a href="https://api.whatsapp.com/send?phone=600173809738" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Jonathan Wong</h5>
            <a href="https://m.me/jonathan.wong.01" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form action=""></form>

      </div>
    </section>
  )
}

export default Contact