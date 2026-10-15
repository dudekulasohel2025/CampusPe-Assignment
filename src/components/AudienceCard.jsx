import ActionButton from './ActionButton'
import Icon from './Icon'

export default function AudienceCard({ card, index, onWaitlist }) {
  return (
    <article className={`audience-card card-${index + 1}`} id={index === 0 ? 'colleges' : index === 1 ? 'jobs' : 'hiring-card'}>
      <div className="card-topline">
        <span className="card-icon"><Icon name={card.icon} size={21} /></span>
        <span className={`availability ${index === 1 ? 'available' : ''}`}>{card.status}</span>
      </div>
      <h2>{card.title}</h2>
      <p className="card-description">{card.description}</p>
      <ul className="benefits">
        {card.benefits.map((benefit) => <li key={benefit}><span><Icon name="check" size={11} /></span>{benefit}</li>)}
      </ul>
      {card.illustration === 'resume' && <div className="resume-art" aria-hidden="true"><div className="resume-lines"><i /><i /><i /><i /><i /><i /></div><span>⌕</span></div>}
      {card.illustration === 'campus' && <div className="campus-art" aria-hidden="true"><Icon name="building" size={62} /></div>}
      {card.illustration === 'hiring' && <div className="hiring-art" aria-hidden="true"><span>&lt;/&gt;</span></div>}
      <ActionButton className="card-action" href={index === 1 ? '#jobs' : undefined} onClick={onWaitlist}>
        {card.action}<Icon name={index === 1 ? 'arrow' : 'bell'} size={15} />
      </ActionButton>
    </article>
  )
}
