import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/covid19.png'
import IMG2 from '../../assets/hello_image.jpg'
import IMG3 from '../../assets/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import IMG4 from "../../assets/aurelien-thomas-Ms9sjaDRW9A-unsplash.jpg"
import RESTRICTEDIMG from '../../assets/julia-fiander-gbJAejsWnZ4-unsplash.jpg'

const data = [
  {
    id: 1,
    image: RESTRICTEDIMG,
    title: 'Leisure Activities Landing Page',
    subtitle: 'Freelance Project',
    github: null,
    link: null,
    confidential: true    
  },
  {
    id: 2,
    image: IMG3,
    title: 'TaskSwift: A Project Management Software',
    subtitle: 'Personal Project',
    github: "https://github.com/jonathanWongLS/TaskSwift",
    link: "http://taskswift-frontend.s3-website-ap-southeast-1.amazonaws.com"
  },
  {
    id: 3,
    image: IMG1,
    title: 'Covid-19 Testing Registration System',
    subtitle: 'Team Based University Project',
    github: "https://github.com/jonathanWongLS/Covid-19-Registration-FIT3077",
    link: null
  },
  {
    id: 4,
    image: IMG4,
    title: 'Covid-19 Data Visualisation Website',
    subtitle: 'Team Based University Project',
    github: "https://github.com/jonathanWongLS/techta",
    link: null
  },
  {
    id: 5,
    image: IMG4,
    title: 'Recipe Nutrition Extractor (NDA Signed)',
    subtitle: 'Team Based University Project',
    github: null,
    link: null
  },
  {
    id: 6,
    image: IMG2,
    title: 'My Portfolio',
    subtitle: 'Personal Project',
    github: 'https://github.com/jonathanWongLS/Portfolio',
    link: 'https://portfolio-jonathan.vercel.app'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtitle, github, link, confidential}) => {
            let github_content = null;
            let website_content = null;
            let confidential_sign = null;

            if (!github){ 
              github_content = null;
            }
            else {
              github_content = <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>;
            }

            if (!link) {
              website_content = null;
            }
            else {
              website_content = <a href={link} className='btn btn-primary' target="_blank" rel='noreferrer'>Website</a>
            }

            if (!confidential) {
              confidential_sign = null;
            } 
            else {
              confidential_sign = <bold>(Confidential)</bold>
            }

            console.log(github);
            return(
              <article key={id} className="portfolio__item">
                
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className='portfolio_title_subtitle'>
                    <h3>
                    {title}{' '}{confidential_sign}
                    <h6 className='subtitle'>{subtitle}</h6>
                  </h3>
                  <div className="portfolio__item-cta">
                    {github_content}
                    {website_content}
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