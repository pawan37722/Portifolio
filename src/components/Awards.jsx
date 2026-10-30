import { useEffect, useState } from 'react'
import { LinkedInIcon } from '../assets/icons'

import award1_1 from '../award/award1/award1.jpg'
import award1_2 from '../award/award1/award2.jpg'
import award1_3 from '../award/award1/award3.jpeg'
import award1_4 from '../award/award1/award4.png'

import award2_1 from '../award/award2/award1.png'
import award2_2 from '../award/award2/award2.jpg'
import award2_3 from '../award/award2/award3.jpg'
import award2_4 from '../award/award2/award4.jpg'

export default function Awards() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const awards = [
    {
      id: 1,
      title: 'Rank 1 — Bug-Hunt CodeCrackers',
      org: 'CGC Jhanjeri',
      linkedin:
        'https://www.linkedin.com/posts/pawan-kumar-542901263_cgcuniversity-dsa-ugcPost-7384301018920030208-SPfM/',
      photos: [
        award1_1,
        award1_2,
        award1_3,
        award1_4,
      ],
    },
    {
      id: 2,
      title: '2nd Place — CodeKatana 3.0',
      org: 'GeeksForGeeks (CGC Jhanjeri)',
      linkedin:
        'https://www.linkedin.com/posts/pawan-kumar-542901263_excited-to-announce-that-i-achieved-2nd-prize-ugcPost-7395832777637695489-BX2b/',
      photos: [
        award2_1,
        award2_2,
        award2_3,
        award2_4,
      ],
    },
  ]

  /* Close modal with ESC */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    if (selectedPhoto) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [selectedPhoto])

  return (
    <>
      <style>{`

        /* =========================================
           AWARDS
        ========================================= */

        .pk-awards {
          width: 100%;
        }

        .pk-awards-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        /* =========================================
           CARD
        ========================================= */

        .pk-award-card {
          width: 100%;
          box-sizing: border-box;

          padding: 14px;

          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 18px;

          background: rgba(255, 255, 255, 0.025);

          overflow: hidden;
        }

        /* =========================================
           TEXT ROW
        ========================================= */

        .pk-award-top {
          width: 100%;

          display: flex;
          align-items: center;

          gap: 24px;

          box-sizing: border-box;

          margin-bottom: 14px;
          padding-bottom: 12px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        /* Trophy + title */

        .pk-award-title {
          flex: 0 1 auto;

          min-width: 0;

          color: #f4f4f5;

          font-size: 1.12rem;
          font-weight: 700;

          line-height: 1.4;

          white-space: nowrap;

          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Organization */

        .pk-award-org {
          flex: 1 1 auto;

          min-width: 0;

          color: #777789;

          font-size: 1rem;

          line-height: 1.4;

          white-space: nowrap;

          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* LinkedIn */

        .pk-award-link {
          flex: 0 0 auto;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 9px 15px;

          border: 1px solid
            rgba(255, 255, 255, 0.13);

          border-radius: 7px;

          color: #a5a5c5;

          background: transparent;

          text-decoration: none;

          font-size: 0.9rem;

          white-space: nowrap;

          transition:
            color 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .pk-award-link:hover {
          color: #ffffff;

          border-color:
            rgba(255, 255, 255, 0.25);

          background:
            rgba(255, 255, 255, 0.04);
        }

        /* =========================================
           PHOTO ROW
        ========================================= */

        .pk-award-photos {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 12px;

          box-sizing: border-box;
        }

        /* =========================================
           PHOTO
        ========================================= */

        .pk-award-photo-box {
          position: relative;

          width: 100%;

          aspect-ratio: 1 / 1;

          overflow: hidden;

          border-radius: 15px;

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          background: #15151c;

          cursor: pointer;

          box-sizing: border-box;
        }

        .pk-award-photo {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.35s ease,
            filter 0.35s ease;
        }

        .pk-award-photo-box:hover
        .pk-award-photo {
          transform: scale(1.05);

          filter: brightness(1.08);
        }

        /* =========================================
           FULL IMAGE MODAL
        ========================================= */

        .pk-award-modal {
          position: fixed;

          inset: 0;

          z-index: 999999;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 30px;

          box-sizing: border-box;

          background:
            rgba(0, 0, 0, 0.90);

          backdrop-filter: blur(10px);

          -webkit-backdrop-filter: blur(10px);

          animation:
            pkAwardFade 0.2s ease;
        }

        @keyframes pkAwardFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .pk-award-modal-image {
          display: block;

          max-width: 92vw;
          max-height: 88vh;

          width: auto;
          height: auto;

          object-fit: contain;

          border-radius: 12px;

          box-shadow:
            0 25px 80px
            rgba(0, 0, 0, 0.7);

          animation:
            pkAwardZoom 0.25s ease;
        }

        @keyframes pkAwardZoom {
          from {
            transform: scale(0.95);
          }

          to {
            transform: scale(1);
          }
        }

        /* =========================================
           CLOSE BUTTON
        ========================================= */

        .pk-award-close {
          position: fixed;

          top: 20px;
          right: 24px;

          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(255, 255, 255, 0.18);

          border-radius: 50%;

          background:
            rgba(25, 25, 30, 0.9);

          color: #ffffff;

          font-size: 28px;

          line-height: 1;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .pk-award-close:hover {
          transform: scale(1.08);

          background:
            rgba(255, 255, 255, 0.15);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .pk-award-card {
            padding: 20px;
          }

          .pk-award-top {
            gap: 16px;
          }

          .pk-award-title {
            font-size: 1rem;
          }

          .pk-award-org {
            font-size: 0.9rem;
          }

          .pk-award-photos {
            gap: 14px;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {

          .pk-awards-list {
            gap: 25px;
          }

          .pk-award-card {
            padding: 16px;
            border-radius: 15px;
          }

          .pk-award-top {
            display: flex;

            flex-direction: column;

            align-items: flex-start;

            gap: 9px;

            margin-bottom: 18px;
            padding-bottom: 15px;
          }

          .pk-award-title {
            width: 100%;

            white-space: normal;

            overflow: visible;

            text-overflow: unset;
          }

          .pk-award-org {
            width: 100%;

            white-space: normal;
          }

          .pk-award-link {
            margin-top: 2px;
          }

          .pk-award-photos {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 10px;
          }

          .pk-award-photo-box {
            border-radius: 11px;
          }

          .pk-award-modal {
            padding: 15px;
          }

          .pk-award-modal-image {
            max-width: 96vw;
            max-height: 85vh;

            border-radius: 8px;
          }

          .pk-award-close {
            top: 14px;
            right: 14px;

            width: 40px;
            height: 40px;

            font-size: 24px;
          }

        }

      `}</style>

      <section
        id="awards"
        className="pk-awards"
      >
        <div className="section-wrapper">

          <p className="section-label">
            Recognition
          </p>

          <h2 className="section-title">
            Awards
          </h2>

          <div className="pk-awards-list">

            {awards.map((award) => (

              <div
                key={award.id}
                className="pk-award-card"
              >

                {/* =================================
                    TEXT ROW
                ================================= */}

                <div className="pk-award-top">

                  <div className="pk-award-title">
                    🏆 {award.title}
                  </div>

                  <div className="pk-award-org">
                    {award.org}
                  </div>

                  <a
                    href={award.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="pk-award-link"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >
                    <LinkedInIcon size={16} />

                    <span>
                      View on LinkedIn
                    </span>
                  </a>

                </div>

                {/* =================================
                    PHOTO ROW
                ================================= */}

                <div className="pk-award-photos">

                  {award.photos.map(
                    (photo, index) => (

                      <div
                        key={photo}
                        className="pk-award-photo-box"
                        onClick={() =>
                          setSelectedPhoto(photo)
                        }
                      >

                        <img
                          src={photo}
                          alt={`${award.title} photo ${index + 1}`}
                          className="pk-award-photo"
                          loading="lazy"
                        />

                      </div>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================
          FULL SIZE IMAGE DIALOG
      ===================================== */}

      {selectedPhoto && (

        <div
          className="pk-award-modal"
          onClick={() =>
            setSelectedPhoto(null)
          }
        >

          <button
            type="button"
            className="pk-award-close"
            onClick={() =>
              setSelectedPhoto(null)
            }
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedPhoto}
            alt="Award full size"
            className="pk-award-modal-image"
            onClick={(e) =>
              e.stopPropagation()
            }
          />

        </div>

      )}

    </>
  )
}