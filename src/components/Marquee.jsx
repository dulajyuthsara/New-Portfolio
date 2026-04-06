import './Marquee.css';

const items = [
  'React', 'Node.js', 'Java', 'Spring Boot', 'React Native',
  'PostgreSQL', 'MongoDB', 'Python', 'TypeScript', 'OpenAI API',
  'Express.js', 'Supabase',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
