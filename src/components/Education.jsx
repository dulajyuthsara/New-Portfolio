import Reveal from './Reveal';
import './Education.css';

const education = [
  {
    degree: 'BSc (Hons) in Computer Science',
    school: 'Information Institute of Technology (IIT), Colombo',
    detail: 'Object-Oriented Programming · Software Development · IT Security · Server-Side Development · Database Systems',
    year: '2024 — Present',
  },
  {
    degree: 'Foundation Programme',
    school: 'Information Institute of Technology (IIT)',
    detail: 'Successfully completed the IIT Foundation Programme, building core computing and engineering fundamentals.',
    year: '2024',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    school: 'Isipathana College',
    detail: "Achieved 4 'A' passes — including Mathematics, English, and Science.",
    year: '2014 — 2022',
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-inner">
        <Reveal><div className="section-tag">Education</div></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">
            Learning<br /><em>never stops.</em>
          </h2>
        </Reveal>

        <div className="edu__list">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 100}>
              <div className="edu-item hoverable">
                <div className="edu-item__left">
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-school">{item.school}</div>
                  <div className="edu-detail">{item.detail}</div>
                </div>
                <div className="edu-year">{item.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
