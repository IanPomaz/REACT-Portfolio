import React from 'react';
import './Portfolio.css';


const projects = [
  {
    name: ' Flavor Impersonator',
    description: 'Recipe Social Media Website',
    image: "https://github.com/ltuckr/focusfolio/assets/128009980/26f9be69-3d40-4858-8e63-fcd3334246c3",
    website: 'https://flavor-impersonator-2e87d3d63575.herokuapp.com/',
    github: 'https://github.com/ltuckr/flavor-impersonator',
  },
  {
    name: 'Moovie App',
    description: 'This project was built to help movie lovers find the right movie for their taste. I wanted a user to be able to search up any movie or title and for this application to be able to provide them with the movie poster and a link to the movie description and trailer',
    image: 'https://github.com/ltuckr/focusfolio/assets/128009980/56331633-ad18-4a79-9a38-8d32dfc6a475',
    website: 'https://ianpomaz.github.io/Moovie-App/',
    github: 'https://github.com/IanPomaz/Moovie-App',
  },
  {
    name: 'focusfolio',
    description: 'FocusFolio is a custom website created for a professional artist to upload, display and sell their artwork to their clients. Users will be promted to create an account if they have not already done so and then are able to view their personal images provided by the artist. The client is able to favorite, comment, add to carton and purchase any of the provided images. The Client is also able to directly message the artist in the app itself as well as see a short biography about the artist and their personal contact information.',
    image: 'https://github.com/ltuckr/focusfolio/assets/128009980/27973376-a1db-4e8d-b90f-ad27e22a3af7',
    website: 'https://afternoon-waters-41270-ff57a8e3fb9c.herokuapp.com/',
    github: 'https://github.com/ltuckr/focusfolio',
  },
];

const Portfolio = () => {
    return (
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <div className="project">
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="links">
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };


export default Portfolio;