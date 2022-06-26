import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1 - Personal Finance Tracker',
    github: 'https://github.com/jonathanWongLS/Projects',
    demo: 'https://colab.research.google.com/drive/1odPkmYsw4gdmr3M_KZAT1W4E0Aqv6jOI?usp=sharing'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 1 - Personal Finance Tracker',
    github: 'https://github.com/jonathanWongLS/Projects',
    demo: 'https://colab.research.google.com/drive/1odPkmYsw4gdmr3M_KZAT1W4E0Aqv6jOI?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 1 - Personal Finance Tracker',
    github: 'https://github.com/jonathanWongLS/Projects',
    demo: 'https://colab.research.google.com/drive/1odPkmYsw4gdmr3M_KZAT1W4E0Aqv6jOI?usp=sharing'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 1 - Personal Finance Tracker',
    github: 'https://github.com/jonathanWongLS/Projects',
    demo: 'https://colab.research.google.com/drive/1odPkmYsw4gdmr3M_KZAT1W4E0Aqv6jOI?usp=sharing'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
              </div>
            </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio