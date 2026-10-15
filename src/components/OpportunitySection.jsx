import Icon from './Icon'

export default function OpportunitySection() {
  return (
    <section className="product-section opportunity-section">
      <div className="product-layout">
        <div className="product-copy">
          <span className="section-kicker"><i /> 01 · OPPORTUNITY DISCOVERY</span>
          <h2>Stop searching.<br /><span>Start getting matched.</span></h2>
          <p className="product-lede">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
          <div className="step-list">
            <article className="step-card active-step"><span className="step-number">01</span><div><h3>Set your preferences</h3><p>Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.</p></div><small>Smart Profile</small></article>
            <article className="step-card"><span className="step-number">02</span><div><h3>Discover relevant opportunities</h3><p>Explore colleges and career opportunities matched to your profile, interests and goals.</p></div><small>AI Ranked</small></article>
            <article className="step-card"><span className="step-number">03</span><div><h3>Get notified when something fits</h3><p>Get notified when a relevant college or new opportunity is found, so you can act early.</p></div><small>Instant Alerts</small></article>
          </div>
          <a className="section-button" href="#jobs">Explore opportunities <Icon name="arrow" size={16} /></a>
        </div>

        <div className="feed-window">
          <header className="feed-header"><span className="feed-mark"><Icon name="sparkle" size={19} /></span><div><strong>CampusPe Opportunity Feed</strong><small>Colleges & opportunities matched to you</small></div><span className="matches-today">● 12 new matches today</span></header>
          <nav className="feed-filters" aria-label="Opportunity categories"><b>All</b><span>Colleges</span><span>Jobs</span><span>Internships</span><span>Freelance</span><span>Part-time</span></nav>
          <div className="opportunity-list">
            <article className="opportunity-card"><span className="org-logo iim-logo">IIM</span><div className="opportunity-main"><h3>IIM Bangalore <small className="tag college-tag">Top College</small></h3><p>⌖ MBA · ⌖ Bengaluru · ₹ 3L+</p><small>India's premier management institute with global exposure...</small></div><a href="#colleges">View Details</a></article>
            <article className="opportunity-card"><span className="org-logo google-logo">G</span><div className="opportunity-main"><h3>Product Intern <small className="tag internship-tag">Internship</small></h3><p>⌖ Bengaluru · ▱ Hybrid · ₹ 35K/mo</p><small>Work on real products, learn from top engineers and build...</small></div><a href="#jobs">Apply Now</a></article>
            <article className="opportunity-card"><span className="org-logo notion-logo">N</span><div className="opportunity-main"><h3>Marketing Gig <small className="tag freelance-tag">Freelance</small></h3><p>⌂ Remote · ▱ Freelance · ₹ 10K - ₹ 25K</p><small>Create content and help with social media campaigns for...</small></div><a href="#jobs">View Details</a></article>
          </div>
          <footer className="feed-footer"><a href="#jobs">View all matched opportunities <Icon name="arrow" size={15} /></a><small>Curated for you · Updated daily</small></footer>
        </div>
      </div>
    </section>
  )
}
