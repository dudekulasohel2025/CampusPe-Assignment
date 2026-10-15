const Icon = ({ name, size = 20, className = '' }) => {
  const paths = {
    cap: <><path d="m2 10 10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c3.5 2.2 8.5 2.2 12 0v-5M22 10v6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    school: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5m4-3v5m4-5v5m4-7v7M3 20h18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m5-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-7a4 4 0 0 1 0 8m6 9v-2a4 4 0 0 0-3-3.87" /></>,
    building: <><path d="M3 21V7l9-4 9 4v14M1 21h22M7 10h2m6 0h2M7 14h2m6 0h2M7 18h2m6 0h2M11 21v-6h2v6" /></>,
    shield: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />,
    sparkle: <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 11 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />,
    robot: <><rect x="4" y="7" width="16" height="13" rx="3" /><path d="M12 3v4M9 13h.01M15 13h.01M9 17h6M2 11v5m20-5v5" /></>,
    whatsapp: <><path d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5Z" /><path d="M8 8.5c.7 2.5 2.3 4.1 4.8 4.8l1.3-1.3 2 .9c-.2 1.4-1.2 2.2-2.4 2-3.4-.5-6.2-3.3-6.7-6.7-.2-1.2.6-2.2 2-2.4l.9 2L8 8.5Z" /></>,
  }

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default Icon