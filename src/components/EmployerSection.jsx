import ActionButton from './ActionButton'
import { employerFeatures } from './data'
import Icon from './Icon'

function EmployerFeatureRow({ feature, index }) {
  return (
    <article className="employer-feature">
      <span className="employer-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="employer-feature-copy">
        <h3>{feature.title}<small>INSTANT SETUP</small></h3>
        <p>{feature.description}</p>
      </div>
      <aside><span className={`employer-badge employer-badge-${index + 1}`}>{feature.primary}</span><span className="employer-badge muted-badge">{feature.secondary}</span></aside>
    </article>
  )
}

export default function EmployerSection({ onPostJob }) {
  return (
    <section className="product-section employer-section" id="employers">
      <div className="college-layout employer-layout">
        <div className="product-copy employer-copy">
          <span className="section-kicker"><i /> 03 · FOR EMPLOYERS</span>
          <h2>Stop running<br />campus drives.<br /><span>Start hiring the right<br className="employer-title-break" /> people.</span></h2>
          <p className="product-lede">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p>
          <ActionButton className="section-button" onClick={onPostJob}>Post a Job <Icon name="arrow" size={16} /></ActionButton>
        </div>
        <div className="employer-feature-list">
          {employerFeatures.map((feature, index) => <EmployerFeatureRow feature={feature} index={index} key={feature.title} />)}
        </div>
      </div>
    </section>
  )
}
