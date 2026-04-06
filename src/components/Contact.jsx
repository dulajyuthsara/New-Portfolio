import Reveal from './Reveal';
import './Contact.css';

const contactItems = [
  { label: 'Email', value: 'dulajyuthsara22@gmail.com', href: 'mailto:dulajyuthsara22@gmail.com' },
  { label: 'Phone', value: '0754823350', href: 'tel:0754823350' },
  { label: 'LinkedIn', value: 'linkedin.com/in/dulaj-yuthsara', href: 'https://linkedin.com/in/dulaj-yuthsara-9b0a0b338' },
  { label: 'GitHub', value: 'github.com/dulaj-yuthsara', href: 'https://github.com/dulajyuthsara' },
  { label: 'Location', value: 'Colombo, Sri Lanka', href: null },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        <Reveal><div className="section-tag">Contact</div></Reveal>

        <div className="contact__wrap">
          <div className="contact__left">
            <Reveal delay={80}>
              <h2 className="contact__big">
                Let's build<br /><em>something</em><br />together.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="contact__sub">
                I'm actively looking for a full-stack developer internship. If you have an opportunity , reach out — I respond fast.
              </p>
            </Reveal>
          </div>

          <div className="contact__details">
            {contactItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="contact__row">
                  <div className="contact__label">{item.label}</div>
                  <div className="contact__value">
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.value}</a>
                      : item.value
                    }
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
