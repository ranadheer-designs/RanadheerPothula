import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState('welcome');
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Available commands
  const availableCommands = ['about', 'skills', 'experience', 'projects', 'education', 'contact', 'help', 'clear'];

  // Typewriter effect
  const typeWriter = (text: string, callback?: () => void) => {
    let i = 0;
    setTypewriterText('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypewriterText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        if (callback) callback();
      }
    }, 50);
  };

  // Handle command execution
  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    setCommandHistory(prev => [...prev, `ranadheer@portfolio:~$ ${command}`]);
    
    if (availableCommands.includes(cmd)) {
      setCurrentSection(cmd);
      if (cmd !== 'clear' && cmd !== 'help') {
        typeWriter(getSectionContent(cmd));
      }
    } else if (cmd === '') {
      // Do nothing for empty command
    } else {
      setCommandHistory(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
    }
    setCurrentCommand('');
  };

  // Get section content
  const getSectionContent = (section: string): string => {
    switch (section) {
      case 'about':
        return 'Experienced Systems Administrator and QA Analyst with strong expertise in system administration, cloud technologies, and modern web development. Currently working as Microsoft UHRS QA Analyst with focus on system reliability, performance optimization, and technical problem-solving. Passionate about building efficient, scalable solutions and maintaining robust infrastructure.';
      case 'skills':
        return 'System Administration: Linux/Unix, Windows Server, Network Configuration, Cloud Infrastructure (AWS, Azure)\nFrontend: React.js, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS\nBackend & DevOps: Node.js, Python, Docker, Kubernetes, CI/CD, MongoDB, PostgreSQL\nTools: Git, GitHub, System Monitoring, Automation & Scripting';
      case 'experience':
        return 'Microsoft UHRS QA Analyst | 2023 - Present\n• Quality assurance and system reliability testing\n• Performance optimization and technical problem-solving\n• System administration and maintenance tasks\n• Collaboration with development teams for scalability improvements';
      case 'projects':
        return 'Infrastructure Monitoring Dashboard [React, Node.js, MongoDB, Docker]\n• Real-time system monitoring and alerting\n• Automated reporting for performance metrics\n\nAutomated Backup & Recovery System [Python, Bash, AWS S3]\n• Disaster recovery procedures with RTO/RPO compliance\n• 90% reduction in manual backup tasks\n\nInteractive Terminal Portfolio [React, TypeScript, Tailwind CSS]\n• Terminal-themed responsive design\n• Interactive command-based navigation';
      case 'education':
        return 'Bachelor of Technology (B.Tech) - Computer Science Engineering\n2020 - 2024 | CGPA: 7.0/10.0\n\nRelevant Coursework: Operating Systems, Database Management, Network Security\nCapstone Project: System Performance Optimization';
      case 'contact':
        return 'Name: Ranadheer Pothula\nEmail: ranadheerpothula@gmail.com\nPhone: +91-8886893647\nLocation: India\n\nLinks:\n• GitHub: github.com/ranadheer-designs\n• LinkedIn: linkedin.com/in/ranadheer-pothula\n• Portfolio: ranadheer-pothula.vercel.app\n• Blog: ranadheer.hashnode.dev';
      default:
        return '';
    }
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    }
  };

  // Clear command
  const clearTerminal = () => {
    setCommandHistory([]);
    setCurrentSection('welcome');
    setTypewriterText('');
  };

  // Help command
  const showHelp = () => {
    const helpText = `Available commands:\n${availableCommands.map(cmd => `  ${cmd}`).join('\n')}\n\nClick on command buttons or type commands directly!`;
    setCommandHistory(prev => [...prev, helpText]);
  };

  // Execute command when section changes
  useEffect(() => {
    if (currentSection === 'clear') {
      clearTerminal();
    } else if (currentSection === 'help') {
      showHelp();
    }
  }, [currentSection]);

  // Cursor blinking effect
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(timer);
  }, []);

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
        <div className="welcome-section">
          <pre className="ascii-art">
██████╗  █████╗ ███╗   ██╗ █████╗ ██████╗ ██╗  ██╗███████╗███████╗██████╗ 
██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔══██╗██║  ██║██╔════╝██╔════╝██╔══██╗
██████╔╝███████║██╔██╗ ██║███████║██║  ██║███████║█████╗  █████╗  ██████╔╝
██╔══██╗██╔══██║██║╚██╗██║██╔══██║██║  ██║██╔══██║██╔══╝  ██╔══╝  ██╔══██╗
██║  ██║██║  ██║██║ ╚████║██║  ██║██████╔╝██║  ██║███████╗███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
          </pre>
          <p className="welcome-text">Welcome to Ranadheer's Interactive Terminal Portfolio!</p>
          <p className="welcome-subtitle">Systems Administrator | Microsoft UHRS QA Analyst | Full Stack Developer</p>
          <p className="help-text">Type 'help' or click on the command buttons below to explore</p>
        </div>

        {/* Command Buttons */}
        <div className="command-buttons">
          {availableCommands.filter(cmd => cmd !== 'clear' && cmd !== 'help').map(cmd => (
            <button 
              key={cmd} 
              className="cmd-btn" 
              onClick={() => executeCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Command History */}
        <div className="command-history">
          {commandHistory.map((line, index) => (
            <div key={index} className="history-line">
              <pre>{line}</pre>
            </div>
          ))}
        </div>

        {/* Current Output */}
        {typewriterText && (
          <div className="output-section">
            <pre className="typewriter">{typewriterText}</pre>
          </div>
        )}

        {/* Input Line */}
        <div className="input-line">
          <span className="prompt">ranadheer@portfolio:~$</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="command-input"
            placeholder="Type a command..."
            autoFocus
          />
          <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/ranadheer-designs" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="icon">📧</span> GitHub
          </a>
          <a href="https://linkedin.com/in/ranadheer-pothula" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="icon">💼</span> LinkedIn
          </a>
          <a href="mailto:ranadheerpothula@gmail.com" className="social-link">
            <span className="icon">✉️</span> Email
          </a>
          <a href="https://ranadheer.hashnode.dev" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="icon">📝</span> Blog
          </a>
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
