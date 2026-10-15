import { useEffect, useState } from 'react'
import Icon from './Icon'

export default function InteractionDialog({ type, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const titles = { signin: 'Welcome back', signup: 'Create your account', waitlist: 'Join the waitlist', college: 'List your college', employer: 'Post a job' }
  const descriptions = {
    signin: 'Sign-in is a preview and is not connected to an account service yet.',
    signup: 'Create an account to stay ready for the CampusPe launch.',
    waitlist: 'Get an update when this CampusPe experience is ready.',
    college: 'Tell us where to send the college onboarding details.',
    employer: 'Request early access to CampusPe hiring tools. Job posting is not live yet.',
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="interaction-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close dialog">×</button>
        {submitted ? (
          <div className="dialog-confirmation"><span>✓</span><h2>{type === 'signin' ? 'Preview sign-in received.' : type === 'signup' ? 'Account preview complete.' : type === 'college' ? 'College request received.' : type === 'employer' ? 'Employer request received.' : "Thanks, you're on our list."}</h2><p>This preview form is not connected to a live account service.</p><button className="dialog-submit" type="button" onClick={onClose}>Done</button></div>
        ) : (
          <>
            <span className="dialog-mark"><Icon name="sparkle" size={20} /></span>
            <h2 id="dialog-title">{titles[type]}</h2>
            <p>{descriptions[type]}</p>
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
              {(type === 'signup' || type === 'college' || type === 'employer') && <label>{type === 'college' ? 'College name' : type === 'employer' ? 'Company name' : 'Your name'}<input required autoFocus placeholder={type === 'college' ? 'e.g. Northview Institute' : type === 'employer' ? 'Your company' : 'Your name'} /></label>}
              <label>Email address<input required autoFocus={type === 'signin' || type === 'waitlist'} type="email" placeholder="you@example.com" /></label>
              {type === 'signin' || type === 'signup' ? <label>Password<input required type="password" minLength="6" placeholder="At least 6 characters" /></label> : null}
              <button className="dialog-submit" type="submit">{type === 'signin' ? 'Continue' : type === 'signup' ? 'Create account' : type === 'college' ? 'Request college listing' : type === 'employer' ? 'Request employer access' : 'Join waitlist'}</button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}
