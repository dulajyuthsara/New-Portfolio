import Counter from './Counter';
import './Hero.css';

// ── Replace this path with your actual photo ──────────────────────────────
// Add your photo as `src/assets/profile.jpg` and update the import below.
import profilePhoto from '../assets/profile.jpg';
// ─────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Ghost background text */}
      <div className="hero__bg-text">CODE</div>

      {/* Right side stats */}
      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num"><Counter target={4} /></span>
          <span className="hero__stat-label">Projects Active</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num"><Counter target={2} /></span>
          <span className="hero__stat-label">Hackathons</span>
        </div>
      </div>

      {/* Main content */}
      <div className="hero__content">
        <div className="hero__left">
          <p className="hero__tag">Computer Science Undergraduate · IIT · Colombo</p>
          <h1 className="hero__title">
            Full&#8209;Stack<br />
            <em>Developer</em>
          </h1>
          <div className="hero__bottom">
            <p className="hero__desc">
              Passionate about building products at the intersection of full-stack
              engineering and artificial intelligence. Actively seeking internship opportunities.
            </p>
            <div className="hero__scroll-hint">
              <span className="hero__scroll-line" />
              Scroll to explore
            </div>
          </div>
        </div>

        {/* Profile photo column */}
        <div className="hero__photo-wrap">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Dulaj Yuthsara" className="hero__photo" />
          ) : (
            <div className="hero__photo-placeholder">
              <span className="hero__photo-hint">
                Add your photo:<br />
                <code>src/assets/profile.jpg</code>
              </span>
            </div>
          )}
          <div className="hero__photo-label">
            <span>Dulaj Yuthsara</span>
            <span>Full-Stack Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
