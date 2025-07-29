import React from 'react';
import ScholarSpherepic from './ScholarSpherepic.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-menu">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/114GPDKUY51qzcjodqRGmgZmcQ5Lv8Emz/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav> 
        <img 
          src="https://avatars.githubusercontent.com/u/160549758?s=400&u=d3985d786bd38adcca510b27a966f2377cfe980e&v=4" 
          alt="Rob Charpentier Headshot" 
          className="headshot"
        />
        <h1>Rob Charpentier</h1>
        <a
          className="App-link"
          href="https://github.com/rcharp24"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Rob Charpentier, a recent graduate with a passion for web development. Currently working in IT, I’m eager to expand my coding knowledge and transition into full-time development. I have educational experience with Python, Java, React, SQL, HTML, CSS, PHP, and JavaScript. I am also enthusiastic about contributing to open-source projects and building scalable web applications.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on recently:</p>
        <ul>
          <li>
            <strong>Portfolio Website:</strong> This project showcases my development skills and interests...
          </li>
          <li>
            <strong>ScholarSphere Website:</strong> A senior project that I helped develope which assist users in become better writers...
              <div className="image-container">
                <img
                src={ScholarSpherepic}
                alt='Scholar Sphere picture'
                aria-hidden="true"
                className="demoPic" 
                />
              </div>
          </li> 
          
          <li>
            <strong>Fit Check Mate Website:</strong> A React website that helps users put together outfits...
            <div className="video-container" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <iframe
                src="https://drive.google.com/file/d/1KZXfqHsAJoS3H46so5nA9z1rJnvo0GrI/preview"
                width="640"
                height="480"
                title="Fit Check Mate Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
          <li>
            <strong>LifeQuest Application:</strong> A Java app gamifying productivity with real life task...
            <div className="video-container" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <iframe
                src="https://drive.google.com/file/d/15Mg5Y1ESXgFzMQZn3pOJMI2HCt5TIuYP/preview"
                width="600"
                height="580"
                title="LifeQuest Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        </ul>

      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via:</p>
        <ul>
          <li>Email: <a href="mailto:robj.charpentier@gmail.com">robj.charpentier@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/robert-charpentier" target="_blank" rel="noopener noreferrer">linkedin.com/in/robert-charpentier</a></li>
          <li>GitHub: <a href="https://github.com/rcharp24" target="_blank" rel="noopener noreferrer">github.com/rcharp24</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
