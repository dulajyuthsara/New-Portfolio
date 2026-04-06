import Reveal from './Reveal';
import './Achievements.css';

const achievements = [
  {
    num: '01',
    title: 'Benchmark Hackathon',
    host: 'Hosted by SLIIT · 2024',
    desc: 'Competed as a team participant, gaining hands-on experience in rapid problem-solving and collaborative development under pressure.',
  },
  {
    num: '02',
    title: 'MODELX Competition',
    host: 'Hosted by IEEE · 2025',
    desc: 'Participated in the IEEE-hosted MODELX competition, gaining exposure to cutting-edge  challenges and industry networks.',
  },

  {
    num: '03',
    title: 'Hult Prize Competition',
    desc: 'Participated in the Hult Prize Competition, gaining exposure to cutting-edge challenges and industry networks.',
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="section-inner">
        <Reveal><div className="section-tag">Achievements &amp; Competitions</div></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">
            Proven under<br /><em>pressure.</em>
          </h2>
        </Reveal>

        <div className="ach__grid">
          {achievements.map((a, i) => (
            <Reveal key={a.num} delay={i * 120}>
              <div className="ach-card hoverable" data-num={a.num}>
                <div className="ach-card__ghost">{a.num}</div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-host">{a.host}</div>
                <p className="ach-desc">{a.desc}</p>
                <div className="ach-bar">
                  <div className="ach-bar__fill" data-width="100" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
