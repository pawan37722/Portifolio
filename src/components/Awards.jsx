import { awards } from '../data/portfolioData'
import { LinkedInIcon } from '../assets/icons'

export default function Awards() {
  return (
    <section id="awards">
      <div className="section-wrapper">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Awards</h2>

        <div className="awards__list">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div>
                <div className="award-card__title">🏆 {award.title}</div>
                <div className="award-card__org">{award.org}</div>
                <a
                  className="award-card__li-link"
                  href={award.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon size={14} /> View on LinkedIn
                </a>
              </div>

              <div className="award-card__photos">
                {award.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`${award.title} photo ${i + 1}`}
                    className="award-card__photo"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
