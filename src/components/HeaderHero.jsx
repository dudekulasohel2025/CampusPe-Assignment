import ActionButton from './ActionButton'
import AudienceCard from './AudienceCard'
import Brand from './Brand'
import Icon from './Icon'
import { audienceCards } from './data'

export default function HeaderHero({ openDialog }) {
  return (
    <>
      <header className="site-header">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#colleges">Colleges</a>
          <a href="#employers">Employers</a>
          <a href="#jobs">Jobs</a>
          <a href="#partners">Blogs</a>
        </nav>
        <div className="account-links">
          <ActionButton className="account-action" onClick={() => openDialog('signin')}>Sign In</ActionButton>
          <ActionButton className="signup" onClick={() => openDialog('signup')}>Sign Up</ActionButton>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-intro">
          <aside className="floating-note whatsapp-note">
            <div className="note-heading"><Icon name="whatsapp" size={17} /> <span>WhatsApp Alert</span></div>
            <strong>Get notified on whatsapp</strong>
            <p>You'll get all important updates on your whatsapp</p>
          </aside>
          <aside className="floating-note resume-note">
            <div className="note-heading purple"><span className="bolt">ϟ</span> <span>Resume Builder</span></div>
            <strong>Build Your Resume</strong>
            <p>Our resume builder gives you dynamic options to build better & faster resume that get you hired</p>
          </aside>

          <div className="hero-copy">
            <div className="assistant-pill"><Icon name="robot" size={18} /> AI-Powered Campus Assistant</div>
            <h1>Connect <span>10X Faster.</span></h1>
            <p className="hero-subtitle">One platform connecting students, colleges & employers — faster.</p>
            <div className="looking-for"><Icon name="sparkle" size={22} /><strong>What are you looking for?</strong><Icon name="sparkle" size={22} /></div>
          </div>

          <div className="activity-chip matched-chip">
            <span className="avatar-stack"><b>AK</b><b>PR</b><b>SN</b></span>
            <span><strong>🔥 142 students matched today</strong><small>Just now · IIT, BITS, VIT</small></span>
          </div>
          <div className="activity-chip recruiter-chip">
            <span className="recruiter-avatar">◈</span>
            <span><strong><b>Radiant Info</b> shortlisted 8 interns</strong><small>● Verified recruiter · 2 days ago</small></span>
          </div>
        </div>

        <div className="audience-grid">
          {audienceCards.map((card, index) => <AudienceCard card={card} index={index} key={card.title} onWaitlist={() => openDialog('waitlist')} />)}
        </div>

        <section className="metrics" aria-label="CampusPe at a glance">
          <div className="metric"><span className="metric-icon violet"><Icon name="users" size={28} /></span><span><strong>800+</strong><small>Students</small></span></div>
          <div className="metric"><span className="metric-icon blue"><Icon name="building" size={27} /></span><span><strong>130+</strong><small>colleges</small></span></div>
          <div className="metric"><span className="metric-icon green"><Icon name="briefcase" size={27} /></span><span><strong>100+</strong><small>jobs & internships</small></span></div>
          <div className="metric"><span className="metric-icon orange"><Icon name="shield" size={28} /></span><span><strong>100%</strong><small>Safe & Trusted</small></span></div>
        </section>

        <section className="partners" id="partners">
          <h2>Trusted by partners across India</h2>
          <div className="partner-logos" aria-label="Our partners">
            <span className="partner-spotifly"><i>✺</i> TALENTSPOTIFY</span>
            <span className="partner-radiant"><i>◉</i><b>RADIANT<small>Info</small></b></span>
            <span className="partner-startup"><i>♛</i><b>DPIIT<small>#startupindia</small></b></span>
            <span className="partner-ginserv"><i>◉</i><b>GINSERV<small>Nurturing Ventures</small></b></span>
            <span className="partner-karnataka"><i>➤</i><b>STARTUP<br />KARNATAKA</b></span>
          </div>
        </section>
      </section>
    </>
  )
}
