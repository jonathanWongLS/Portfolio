import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/covid19.png'
import IMG2 from '../../assets/hello_image.jpg'
import IMG3 from '../../assets/react-js.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Covid-19 Data Visualisation Website',
    subtitle: 'A Team Based University Project',
    github: null,
    link: 'https://datatech-techta.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio',
    subtitle: 'A Personal Project',
    github: 'https://github.com/jonathanWongLS/Portfolio',
    link: 'https://portfolio-jonathan.vercel.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Build Your First React JS Application',
    subtitle: 'A Tutorial Project',
    github: 'https://github.com/jonathanWongLS/WebDevProjects/tree/main/UDEMY%20-%20ReactJS',
    link: 'https://reactjstutorial.vercel.app'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtitle, github, link}) => {
            let github_content = null;

            if (!github){ 
              github_content = null;
            }
            else {
              github_content = <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>;
            }
            console.log(github);
            return(
              <article key={id} className="portfolio__item">
                
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className='portfolio_title_subtitle'>
                    <h3>
                    {title}
                    <h6 className='subtitle'>{subtitle}</h6>
                  </h3>
                  <div className="portfolio__item-cta">
                    {github_content}
                    <a href={link} className='btn btn-primary' target="_blank" rel='noreferrer'>Website</a>
                  </div>
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