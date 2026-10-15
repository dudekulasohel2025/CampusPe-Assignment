import ActionButton from './ActionButton'
import Icon from './Icon'

export default function CollegeSection({ onListCollege }) {
  return (
    <section className="product-section college-section" id="college-tools">
      <div className="college-layout">
        <div className="product-copy college-copy">
          <span className="section-kicker"><i /> 02 · FOR COLLEGES</span>
          <h2>Get Discovered<br />by <span>Students and<br />Recruiters.</span></h2>
          <p className="product-lede">Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p>
          <ActionButton className="section-button" onClick={onListCollege}>List Your College <Icon name="arrow" size={16} /></ActionButton>
        </div>
        <div className="college-feature-list">
          <article className="college-feature"><div><small><b>01</b> VERIFIED PROFILE</small><h3>Build your college profile</h3><p>Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.</p></div><aside><span className="feature-badge green-badge">◉ NAAC A++ Ready</span><span className="feature-badge blue-badge">98% Match</span></aside></article>
          <article className="college-feature"><div><small><b>02</b> DIRECT ENROLL</small><h3>Students discover and connect</h3><p>Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.</p></div><aside><span className="feature-badge blue-badge">▣ Direct Enquiries</span><span className="feature-badge neutral-badge">● WHATSAPP / CHAT</span><small className="response-time">Avg. response: &lt;15 min</small></aside></article>
          <article className="college-feature"><div><small><b>03</b> CAMPUS RECRUITING</small><h3>Recruiters discover your College</h3><p>Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.</p></div><aside><span className="feature-badge purple-badge">▦ 500+ Hiring Partners</span><span className="feature-badge blue-badge">♧ Connect Directly</span></aside></article>
          <article className="college-feature"><div><small><b>04</b> LIVE HUD</small><h3>Track placements in real time</h3><p>Track students, interviews, offers and placements from one centralized dashboard.</p></div><aside><span className="feature-badge red-badge">● LIVE PLACEMENTS</span><span className="feature-badge solid-blue">Students · Interviews · Offers</span></aside></article>
        </div>
      </div>
    </section>
  )
}
