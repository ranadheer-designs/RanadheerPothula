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
            <p>Experienced Systems Administrator and Full Stack Developer with strong expertise in system administration, cloud technologies, and modern web development. Proven track record at Microsoft UHRS with focus on system reliability, performance optimization, and technical problem-solving. Passionate about building efficient, scalable solutions and maintaining robust infrastructure.</p>
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
              → System Administration:
              <ul>
                • Linux/Unix System Administration
                • Windows Server Management
                • Network Configuration & Troubleshooting
                • System Monitoring & Performance Tuning
                • Cloud Infrastructure (AWS, Azure)
              </ul>
            </div>
            <div className="skill-category">
              → Frontend Development:
              <ul>
                • React.js, Next.js, TypeScript
                • HTML5, CSS3, Tailwind CSS
                • JavaScript (ES6+), Redux
                • Responsive Web Design
              </ul>
            </div>
            <div className="skill-category">
              → Backend & DevOps:
              <ul>
                • Node.js, Express.js, Python
                • Database Management (MySQL, PostgreSQL, MongoDB)
                • Docker, Kubernetes, CI/CD
                • Git, GitHub, Version Control
                • Automation & Scripting
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
              → Systems Administrator & Technical Specialist
              <p className="company">Microsoft UHRS | 2023 - Present</p>
              <ul>
                • Managed and maintained critical system infrastructure ensuring 99.9% uptime
                • Implemented automated monitoring solutions reducing incident response time by 50%
                • Performed system administration tasks including user management, security patches, and backup procedures
                • Troubleshot complex technical issues and provided tier-2 technical support
                • Collaborated with development teams to optimize system performance and scalability
                • Documented system processes and created technical guidelines for team members
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
              → Infrastructure Monitoring Dashboard
              <p className="tech-stack">[React, Node.js, MongoDB, Docker]</p>
              <ul>
                • Built comprehensive system monitoring dashboard for infrastructure management
                • Implemented real-time alerting system for critical system events
                • Created automated reporting tools for system performance metrics
                • Deployed using Docker containers with load balancing
              </ul>
            </div>
            <div className="project">
              → Automated Backup & Recovery System
              <p className="tech-stack">[Python, Bash, AWS S3, Cron]</p>
              <ul>
                • Developed automated backup solution for critical business data
                • Implemented disaster recovery procedures with RTO/RPO compliance
                • Created monitoring scripts for backup validation and alerts
                • Reduced manual backup tasks by 90% through automation
              </ul>
            </div>
            <div className="project">
              → Portfolio Website
              <p className="tech-stack">[React, TypeScript, Tailwind CSS, Vercel]</p>
              <ul>
                • Designed and developed terminal-themed portfolio website
                • Implemented responsive design with ATS-friendly content structure
                • Optimized for performance and SEO best practices
                • Deployed with CI/CD pipeline for automatic updates
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
              → Bachelor of Technology (B.Tech)
              <p className="institution">Computer Science Engineering | 2020 - 2024</p>
              <ul>
                • CGPA: 7.0/10.0
                • Specialized in Computer Science and Engineering
                • Relevant Coursework: Operating Systems, Database Management, Network Security
                • Completed capstone project on "System Performance Optimization"
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
              • Hackathon Participant - Participated in multiple technical hackathons focusing on system optimization
              • Freelance Developer - Worked on various web development and system administration projects
              • Technical Blogger - Published articles on system administration and development best practices on Hashnode
              • Open Source Contributor - Active contributor to system administration and DevOps tools
              • Continuous Learning - Staying updated with latest technologies in cloud computing and automation
              • Technical Mentoring - Helping junior developers and system administrators in their career growth
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
                <span className="label">Name:</span>
                <span className="value">Ranadheer Pothula</span>
              </div>
              <div className="contact-item">
                <span className="label">Email:</span>
                <span className="value">ranadheerpothula@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="label">Phone:</span>
                <span className="value">+91-8886893647</span>
              </div>
              <div className="contact-item">
                <span className="label">Location:</span>
                <span className="value">India</span>
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
                <span className="label">Hashnode:</span>
                <span className="value">ranadheer.hashnode.dev</span>
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
