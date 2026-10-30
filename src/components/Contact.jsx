// 








import { profile, social } from '../data/portfolioData'

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    `Hi ${profile.name}, I found your portfolio and wanted to say hello!`
  )

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}`

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

            {/* Gmail */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Send Email
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919523307039?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Say Hi on WhatsApp
            </a>

            {/* LinkedIn */}
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