import './Ticker.css';

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__item">
        <span className="ticker__dot" />
        <span>Available for internships</span>
      </div>
      <div className="ticker__item">
        <span>dulajyuthsara22@gmail.com</span>
      </div>
      <div className="ticker__item">
        <span>IIT · BSc Computer Science</span>
      </div>
      <div className="ticker__item">
        <span>React · Node.js · Java · Python</span>
      </div>
    </div>
  );
}
