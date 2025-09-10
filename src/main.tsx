import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn red"></span>
          <span className="btn yellow"></span>
          <span className="btn green"></span>
        </div>
        <div className="terminal-title">ranadheer@portfolio:~$</div>
      </div>
      
      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">cat about.txt</span>
        </div>
        
        <section className="section">
          <h2 className="section-title"># PROFESSIONAL SUMMARY</h2>
          <div className="content">
            <p>Passionate Full Stack Developer with expertise in modern web technologies.</p>
            <p>Dedicated to creating efficient, scalable, and user-friendly applications.</p>
            <p>Strong background in both frontend and backend development.</p>
          </div>
        </section>
        
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">ls -la skills/</span>
        </div>
        
        <section className="section">
          <h2 className="section-title"># CORE SKILLS</h2>
          <div className="content">
            <div className="skill-category">
              <h3>→ Frontend:</h3>
              <ul>
                <li>• React.js, Next.js, TypeScript</li>
                <li>• HTML5, CSS3, Tailwind CSS</li>
                <li>• JavaScript (ES6+), Redux</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>→ Backend:</h3>
              <ul>
                <li>• Node.js, Express.js</li>
                <li>• Python, Django, FastAPI</li>
                <li>• RESTful APIs, GraphQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>→ Database & Tools:</h3>
              <ul>
                <li>• MongoDB, PostgreSQL, MySQL</li>
                <li>• Git, Docker, AWS</li>
                <li>• Jest, Cypress, Webpack</li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">cat work_experience.log</span>
        </div>
        
        <section className="section">
          <h2 className="section-title"># WORK EXPERIENCE</h2>
          <div className="content">
            <div className="job">
              <h3>→ Senior Full Stack Developer</h3>
              <p className="company">Tech Solutions Inc. | 2022 - Present</p>
              <ul>
                <li>• Led development of scalable web applications using React and Node.js</li>
                <li>• Improved application performance by 40% through code optimization</li>
                <li>• Mentored junior developers and conducted code reviews</li>
                <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
              </ul>
            </div>
            <div className="job">
              <h3>→ Frontend Developer</h3>
              <p className="company">Digital Agency XYZ | 2020 - 2022</p>
              <ul>
                <li>• Developed responsive web applications for 20+ clients</li>
                <li>• Collaborated with design teams to implement pixel-perfect UIs</li>
                <li>• Integrated third-party APIs and payment gateways</li>
                <li>• Maintained 99% client satisfaction rate</li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">find ./projects -name "*.project"</span>
        </div>
        
        <section className="section">
          <h2 className="section-title"># PROJECTS</h2>
          <div className="content">
            <div className="project">
              <h3>→ E-Commerce Platform</h3>
              <p className="tech-stack">[React, Node.js, MongoDB, Stripe API]</p>
              <ul>
                <li>• Full-featured online shopping platform with cart and checkout</li>
                <li>• Admin dashboard for inventory and order management</li>
                <li>• Integrated payment processing and email notifications</li>
                <li>• Deployed on AWS with auto-scaling capabilities</li>
              </ul>
            </div>
            <div className="project">
              <h3>→ Task Management App</h3>
              <p className="tech-stack">[Next.js, TypeScript, Prisma, PostgreSQL]</p>
              <ul>
                <li>• Real-time collaborative task management with drag & drop</li>
                <li>• User authentication and role-based permissions</li>
                <li>• Dark/light theme support and responsive design</li>
                <li>• RESTful API with comprehensive testing suite</li>
              </ul>
            </div>
            <div className="project">
              <h3>→ Weather Analytics Dashboard</h3>
              <p className="tech-stack">[React, D3.js, Python, FastAPI]</p>
              <ul>
                <li>• Interactive data visualization for weather patterns</li>
                <li>• Real-time data fetching from weather APIs</li>
                <li>• Machine learning predictions for weather forecasting</li>
                <li>• Responsive charts and graphs with filtering options</li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">cat education.txt</span>
        </div>
        
        <section className="section">
          <h2 className="section-title"># EDUCATION</h2>
          <div className="content">
            <div className="education">
              <h3>→ Bachelor of Computer Science</h3>
              <p className="institution">University of Technology | 2016 - 2020</p>
              <ul>
                <li>• Graduated with First Class Honors (GPA: 3.8/4.0)</li>
                <li>• Specialized in Software Engineering and Database Systems</li>
                <li>• President of Programming Club (2018-2020)</li>
                <li>• Published research paper on "Optimizing Database Queries"</li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">ls activities/</span>
        </div>
        
        <section className="section">
          <h2 className="section-title"># ADDITIONAL ACTIVITIES</h2>
          <div className="content">
            <ul>
              <li>• Open Source Contributor - Contributed to 15+ GitHub projects</li>
              <li>• Technical Blogger - 50+ articles on Medium and Dev.to</li>
              <li>• Speaker at local developer meetups and conferences</li>
              <li>• Volunteer coding instructor for underprivileged youth</li>
              <li>• AWS Certified Solutions Architect (2023)</li>
              <li>• Google Cloud Professional Developer (2022)</li>
            </ul>
          </div>
        </section>
        
        <div className="prompt-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="command">cat contact.txt</span>
        </div>
        
        <section className="section contact">
          <h2 className="section-title"># CONTACT INFORMATION</h2>
          <div className="content">
            <div className="contact-grid">
              <div className="contact-item">
                <span className="label">Email:</span>
                <span className="value">ranadheer.pothula@email.com</span>
              </div>
              <div className="contact-item">
                <span className="label">Location:</span>
                <span className="value">Hyderabad, India</span>
              </div>
              <div className="contact-item">
                <span className="label">GitHub:</span>
                <span className="value">github.com/ranadheer-designs</span>
              </div>
              <div className="contact-item">
                <span className="label">LinkedIn:</span>
                <span className="value">linkedin.com/in/ranadheer-pothula</span>
              </div>
              <div className="contact-item">
                <span className="label">Portfolio:</span>
                <span className="value">ranadheer-pothula.vercel.app</span>
              </div>
            </div>
          </div>
        </section>
        
        <div className="prompt-line blinking">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <span className="cursor">_</span>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
