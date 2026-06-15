import { profile, social } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-wrapper">
        <p className="section-label">Let's Talk</p>
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-card">
          <p>
            I'm currently open to full-time roles and interesting collaborations.
            Whether you have a project in mind or just want to say hi — drop me a message!
          </p>

          <div className="contact-card__actions">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Send Email
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
