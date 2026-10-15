import Icon from './Icon'

export default function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#top" aria-label="CampusPe home">
      <span className="brand-cap"><Icon name="cap" size={18} /></span>
      <span>Campus<span>Pe</span><sup>®</sup></span>
      <small>Connecting Students, Institutions & Companies</small>
    </a>
  )
}
