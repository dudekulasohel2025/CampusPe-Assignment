import { useState } from 'react'

export default function ResumeMatchingSection() {
  const [notice, setNotice] = useState(false)

  return (
    <section className="product-section matching-section" id="resume-matching">
      <div className="matching-heading">
        <span className="section-kicker"><i /> TRY IT LIVE <em>v2.4 AI Engine</em></span>
        <h2>Upload your resume.<br /><span>Find jobs that fit.</span></h2>
        <p>Upload once, CampusPe reads your skills, experience, and preferences —<br className="desktop-break" /> then finds relevant jobs across 1,000+ sources.</p>
      </div>
      <div className="resume-preview-wrap">
        <aside className="resume-float resume-match-rate"><span>ϟ</span><div><strong>98% Match Rate</strong><small>AI semantic rank</small></div></aside>
        <div className="resume-preview-panel">
          <div className="resume-drop-preview">
            <span className="corner corner-tl" /><span className="corner corner-tr" /><span className="corner corner-bl" /><span className="corner corner-br" />
            <h3>Upload your resume</h3>
            <p>PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience.</p>
            <button className="resume-preview-button" type="button" onClick={() => setNotice(true)}>Upload resume <span aria-hidden="true">↑</span></button>
            <small className="drop-hint">or drag and drop your file here</small>
            <div className="file-types"><span>PDF</span><span>DOC</span><span>DOCX</span></div>
            {notice && <p className="resume-notice" role="status">Preview only. No file is uploaded.</p>}
          </div>
        </div>
        <aside className="resume-float resume-compliance"><span>♙</span><div><strong>ATS Compliant</strong><small>Standardized parser</small></div></aside>
      </div>
      <div className="resume-status-row">
        <div><span className="status-check">✓</span><b>Resume analyzed<small>● Ready in 4s</small></b></div>
        <div><span className="status-check blue-check">✓</span><b>Skills matched<small>Deep taxonomy</small></b></div>
        <div><span className="status-check violet-check">✓</span><b>Experience matched<small>Contextual seniority</small></b></div>
        <div><span className="status-check blue-check">✓</span><b>1,000+ sources searched<small>Real-time aggregators</small></b></div>
      </div>
    </section>
  )
}
