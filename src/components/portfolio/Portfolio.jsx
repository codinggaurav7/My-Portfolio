import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Foodi-App MERN Stack',
      img: IMG1,
      description:
      'Online Food Ordering System- Foodi App which is based on MERN technology',
      
      link: 'https://complete-foodi-client-app.vercel.app/',
      github: 'https://github.com/codinggaurav7/complete-foodi-client-app',
    },
    {
      id: 2,
      title: 'E-Commerce App',
      img: IMG2,
      description:
        'E-Commerce Application | Both Admin and User Panel',
      technologies: 'MERN| Middlewares',
      link: 'https://sleepy-teal-cape.cyclic.app/',
      github: 'https://github.com/codinggaurav7/E-commerce',
    },
    {
      id: 3,
      title: 'Portfolio',
      img: IMG3,
      description: 'Personal Portfolio based On React',
      technologies: 'JavaScript | React',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Weather Prediction App with Api Integration',
      img: IMG4,
      description:
        'Weather App with Next.js 14, Tailwind CSS, and TypeScript and  7 Days Forecast',
      technologies: 'JavaScript | Next.JS |API Integration',
      link: 'https://weather-app-nextjs-seven-rho.vercel.app/',
      github: 'https://github.com/codinggaurav7/Weather-App-using-API-Integration',
    },

{
  id: 5,
  title: 'Personality-Prediction-System-Using-CV-Analysis',
  img: IMG5,
  description:
    'Personality Prediction System Using CV Analysis | Using Ocean Values and Big Five Personality Traits ',
  technologies: 'ML | Python',
  link: 'https://github.com/codinggaurav7/Personality-Prediction-Using-CV-Analysis',
  github: 'https://github.com/codinggaurav7/Personality-Prediction-Using-CV-Analysis',
},
    {
      id: 6,
      title: 'Fitness Gym Portal ',
      img: IMG6,
      description:
        'Fitness Gym Portal | Fully Responsive Website',
      technologies: 'JavaScript | Css | HTML',
      link: 'https://gauravgymportal.netlify.app/',
      github: 'https://github.com/codinggaurav7/Fitness-Gym-Portal',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
