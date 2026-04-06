import Reveal from './Reveal';
import Counter from './Counter';
import './Skills.css';

const categories = [
  {
    name: 'Languages',
    pills: ['Java', 'Python', 'JavaScript', 'TypeScript'],
    width: 90,
  },
  {
    name: 'Frontend',
    pills: ['React', 'React Native', 'HTML', 'CSS', 'Angular'],
    width: 85,
  },
  {
    name: 'Backend',
    pills: ['Node.js', 'Express.js', 'Spring Boot', 'Java', 'Python'],
    width: 80,
  },
  {
    name: 'Database & DevOps',
    pills: ['PostgreSQL', 'MongoDB', 'SQL', 'Git', 'Supabase'],
    width: 75,
  },
];

const stats = [
  { num: 8, label: 'Ongoing Projects' },
  { num: 14, label: 'Technologies', suffix: '+' },
  { num: 4, label: 'Hackathons Entered' },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-inner">
        <Reveal><div className="section-tag">Technical Skills</div></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">
            Built with the<br /><em>right tools.</em>
          </h2>
        </Reveal>

        <div className="skills__grid">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 80}>
              <div className="skill-cat hoverable">
                <div className="skill-cat__name">{cat.name}</div>
                <div className="skill-cat__pills">
                  {cat.pills.map(p => (
                    <span key={p} className="skill-pill hoverable">{p}</span>
                  ))}
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__fill" data-width={cat.width} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="skills__stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="stat-cell">
                <span className="stat-num">
                  <Counter target={s.num} suffix={s.suffix || ''} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
