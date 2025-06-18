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
            <li><a href="https://github.com/rcharp24/portfolio/blob/main/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
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
        <p>Hello! I'm Rob Charpentier, a recent graduate with a passion for web development. Currently working in IT, I’m eager to expand my coding knowledge and transition into full-time development. I specialize in working with Python, Java, React, SQL, HTML, CSS, PHP, and JavaScript. I am also enthusiastic about contributing to open-source projects and building scalable web applications.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on recently:</p>
        <ul>
<<<<<<< HEAD
          <li><strong>Portfolio Website:</strong> This React project showcases my development skills and interests.</li>
          <li><strong>Fit Check Mate Website:</strong> A React project where users upload pictures of clothes. It extracts colors, tells the user if the clothes match, identifies any outliers, and provides better matching color suggestions.</li>
          
          {/* 🔽 Embed video if it's hosted (update src with actual link if available) */}
          <div className="video-container" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <video width="50%" height="auto" controls>
              <source src="https://www.example.com/fit-check-mate-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <li><strong>LifeQuest Application:</strong> A Java app gamifying productivity. Users complete tasks for XP. Stats increase as users complete more, encouraging healthy habits with a fun system.</li>
=======
          <li><strong>Portfolio Website:</strong> This React project showcasing my development skills and interests.</li>
          <li><strong>Fit Check Mate:</strong> Currently in the works, I am building a website that will allow users to upload pictures of tops, bottoms and shoes, it will analyze the color and patterns and let them know if it matches or not. If it doesnt match, it will give them recommendations to help improve their style. I currently have the front end set up and working on the backend</li>
>>>>>>> bc313d1d9d2f1ffdcce66b6cee9584eb5bfe4b41
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
