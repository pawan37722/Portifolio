import { useEffect, useState } from 'react'
import axios from 'axios'

import { social } from '../data/portfolioData'
import { LeetcodeIcon, ExternalIcon } from '../assets/icons'
import knightBadgeImage from '../assets/knight-badge.png'

export default function LeetCode() {

  const [totalProblems, setTotalProblems] = useState(0)
  const [totalRating, setTotalRating] = useState(0)

  useEffect(() => {

    async function getLeetCodeData() {

      try {
        const username = "P_a_w_a_n_K_r"
        const [solvedRes, contestRes] = await Promise.all([
          axios.get(
            `https://alfa-leetcode-api.onrender.com/${username}/solved`
          ),
          axios.get(
            `https://alfa-leetcode-api.onrender.com/${username}/contest`
          )
        ])
        // Problems
        const solved = solvedRes.data?.solvedProblem || solvedRes.data?.totalSolved || solvedRes.data?.total || '1260+'
        // Rating
        const rating = contestRes.data?.contestRating || contestRes.data?.rating || contestRes.data?.contest?.rating || '1946'
        setTotalProblems(Number(solved))
        setTotalRating(Math.round(Number(rating)))

      } catch (error) {

        console.log(
          "LeetCode Error:",
          error.response?.data || error.message
        )

      }

    }

    getLeetCodeData()

  }, [])

  return (
    <section id="leetcode">

      <div className="section-wrapper">

        <p className="section-label">
          Competitive
        </p>

        <h2 className="section-title">
          LeetCode
        </h2>

        <div className="leetcode-card">

          {/* LEETCODE ICON */}
          <div className="leetcode-card__icon">
            <LeetcodeIcon size={36} />
          </div>

          {/* STATS */}
          <div className="leetcode-card__stats">

            <div>
              <div className="lc-stat__val">
                {totalProblems}
              </div>

              <div className="lc-stat__key">
                Problems Solved
              </div>
            </div>

            <div>
              <div className="lc-stat__val">
                {totalRating}
              </div>

              <div className="lc-stat__key">
                Contest Rating
              </div>
            </div>

          </div>

          {/* KNIGHT BADGE */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginLeft: '30px',
              padding: '8px 18px',
              border: '1px solid rgba(160, 120, 255, 0.35)',
              borderRadius: '12px',
              background: 'rgba(120, 80, 255, 0.08)',
              flexShrink: 0
            }}
          >

            <img
              src={knightBadgeImage}
              alt="Knight Badge"
              style={{
                width: '52px',
                height: '52px',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            <div>

              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#ffffff'
                }}
              >
                Knight
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: '#a78bfa',
                  marginTop: '3px'
                }}
              >
                LeetCode Contest Badge
              </div>

            </div>

          </div>

          {/* PROFILE LINK */}
          <a
            className="leetcode-card__link"
            href={social.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
            <ExternalIcon size={14} />
          </a>

        </div>

      </div>

    </section>
  )
}