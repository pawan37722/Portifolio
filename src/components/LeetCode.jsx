import { leetcodeStats, social } from '../data/portfolioData'
import { LeetcodeIcon, ExternalIcon } from '../assets/icons'

export default function LeetCode() {
  return (
    <section id="leetcode">
      <div className="section-wrapper">
        <p className="section-label">Competitive</p>
        <h2 className="section-title">LeetCode</h2>

        <div className="leetcode-card">
          <div className="leetcode-card__icon">
            <LeetcodeIcon size={36} />
          </div>

          <div className="leetcode-card__stats">
            <div>
              <div className="lc-stat__val">{leetcodeStats.problems}</div>
              <div className="lc-stat__key">Problems Solved</div>
            </div>
            <div>
              <div className="lc-stat__val">{leetcodeStats.rating}</div>
              <div className="lc-stat__key">Contest Rating</div>
            </div>
          </div>

          <a
            className="leetcode-card__link"
            href={social.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            View Profile <ExternalIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
