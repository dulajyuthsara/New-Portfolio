import { useState } from 'react';
import Reveal from './Reveal';
import './Projects.css';

const projects = [
  {
    num: '01',
    name: 'CodeInsight-AI',
    desc: 'Full-stack application that lets users submit source code and receive AI-powered feedback — performance analysis, bug detection, security warnings, and code quality evaluation.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
    year: '2026 — Present',
  },
  {
    num: '02',
    name: 'Swap-up',
    desc: 'Appointment scheduling platform with a REST API handling client management and service assignments, paired with a React Native mobile frontend for seamless booking.',
    tags: ['React Native', 'Node.js', 'Express.js', 'PostgreSQL'],
    year: '2026',
  },
  {
    num: '03',
    name: 'CREOWN E-Commerce',
    desc: 'Responsive frontend for a clothing store focused on modern UI design and smooth user experience. Clean product browsing and shopping flows.',
    tags: ['React.js', 'CSS'],
    year: '2026 — Present',
  },
  {
    num: '04',
    name: 'Quality Education Platform',
    desc: 'Fully responsive web platform for educational resources. Awarded 80/100 in academic assessment for overall excellence in web development.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: 'Jan – Apr 2025',
  },
];

function ProjectRow({ project, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className={`project-item hoverable ${hovered ? 'project-item--hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="project-num">{project.num}</span>
        <div className="project-body">
          <div className="project-name">{project.name}</div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            {project.tags.map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-inner">
        <Reveal><div className="section-tag">Selected Projects</div></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">
            Work that<br /><em>ships.</em>
          </h2>
        </Reveal>

        <div className="projects__list">
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
