import ActionButton from './ActionButton'
import Brand from './Brand'
import Icon from './Icon'

export default function SiteFooter({ onListCollege, onPostJob }) {
  const columns = [
    { title: 'For Students', links: [{ label: 'Explore Colleges', href: '#colleges' }, { label: 'Find Opportunities', href: '#jobs' }, { label: 'Internships', href: '#jobs' }, { label: 'Full-time Jobs', href: '#jobs' }, { label: 'Part-time & Gig', href: '#jobs' }, { label: 'Application Tracker', href: '#resume-matching' }] },
    { title: 'For Colleges', links: [{ label: 'List Your College', action: onListCollege }, { label: 'Admissions', href: '#college-tools' }, { label: 'Fee Collection', href: '#college-tools' }, { label: 'Placements', href: '#college-tools' }] },
    { title: 'For Employers', links: [{ label: 'Post a Job', action: onPostJob }, { label: 'Find Talent', href: '#employers' }, { label: 'Campus Hiring', href: '#employers' }] },
    { title: 'Company', links: [{ label: 'About Us', href: '#about' }, { label: 'Contact Us', href: 'mailto:contactus@campuspe.com' }, { label: 'Blogs', href: '#partners' }, { label: 'Careers', href: '#employers' }] },
    { title: 'Legal & Policies', links: [{ label: 'Privacy Policy', href: '#policies' }, { label: 'Terms & Conditions', href: '#policies' }, { label: 'Refund & Cancellation Policy', href: '#policies' }, { label: 'Cookie Policy', href: '#policies' }, { label: 'Grievance Redressal', href: '#policies' }, { label: 'Job & Internship Disclaimer', href: '#policies' }] },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div><h2>Ready for what’s next?</h2><p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p></div>
        <div className="footer-cta-actions">
          <ActionButton className="footer-cta-primary" href="#colleges">Explore Colleges <Icon name="arrow" size={14} /></ActionButton>
          <ActionButton className="footer-cta-primary" href="#jobs">Find Opportunities <Icon name="arrow" size={14} /></ActionButton>
          <ActionButton className="footer-cta-secondary" onClick={onListCollege}>List Your College <Icon name="arrow" size={14} /></ActionButton>
          <ActionButton className="footer-cta-secondary" onClick={onPostJob}>Post a Job <Icon name="arrow" size={14} /></ActionButton>
        </div>
      </div>

      <div className="footer-main">
        <section className="footer-about" id="about"><Brand footer /><p>From choosing a college to finding your next opportunity.</p><p>CampusPe connects students, colleges and employers in one place.</p></section>
        {columns.map((column) => (
          <nav className="footer-column" aria-label={column.title} key={column.title}>
            <h3 id={column.title === 'Legal & Policies' ? 'policies' : undefined}>{column.title}</h3>
            {column.links.map((link) => link.action
              ? <button className="footer-link" type="button" onClick={link.action} key={link.label}>{link.label}</button>
              : <a className="footer-link" href={link.href} key={link.label}>{link.label}</a>)}
            {column.title === 'Legal & Policies' && <a className="all-policies" href="#policies">View all policies <Icon name="arrow" size={13} /></a>}
          </nav>
        ))}
      </div>

      <div className="footer-contact"><div><a href="mailto:contactus@campuspe.com"><span>✉</span> contactus@campuspe.com</a><a href="tel:+916362606464"><span>⌕</span> +91 6362606464</a></div><p><i /> Students · Colleges · Employers</p></div>
      <div className="footer-bottom"><p>2026 CampusPe Technologies Pvt. Ltd. <a href="#policies">Privacy</a> <a href="#policies">Terms</a> <a href="#policies">Grievance</a></p><nav className="social-links" aria-label="Social media"><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://x.com/" aria-label="X">x</a><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.youtube.com/" aria-label="YouTube">▶</a></nav></div>
    </footer>
  )
}
