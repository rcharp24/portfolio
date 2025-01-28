import React from 'react';
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
            <li><a href="https://github.com/rcharp24/portfolio/blob/main/Resume.pdf">Resume</a></li>
          </ul>
        </nav>
        <img 
          src="https://avatars.githubusercontent.com/u/160549758?s=400&u=d3985d786bd38adcca510b27a966f2377cfe980e&v=4" 
          alt="Rob Charpentier Headshot" 
          className="headshot"
        />
        <h1>Welcome to My Portfolio</h1>
        
        <a
          className="App-link"
          href="https://github.com/rcharp24"
          target="scholarsphere"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Rob Charpentier, a recent graduate with a passion for web development. Currently working in IT, I’m eager to expand my coding knowledge and transition into full-time development. I specialize in working with Python, Java, React, SQL, HTML, CSS, PHP, and JavaScript. I am also enthusiastic about contributing to open-source projects and building scalable web applications.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on recently:</p>
        <ul>
          <li><strong>Portfolio Website:</strong> This React project showcasing my development skills and interests.</li>
          <li><strong>SCADA System Integration:</strong> Developed a SCADA interface as part of my SCADA project to automate processes in energy systems.</li>
          <li><strong>Python Automation Scripts:</strong> Built scripts to automate repetitive tasks in IT environments.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via:</p>
        <ul>
          <li>Email: <a href="mailto:robj.charpentier@gmail.com">robj.charpentier@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/robert-charpentier-765369197" target="_blank" rel="noopener noreferrer">linkedin.com/in/robert-charpentier-765369197</a></li>
          <li>GitHub: <a href="https://github.com/rcharp24" target="_blank" rel="noopener noreferrer">github.com/rcharp24</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
