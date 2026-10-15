export default function ActionButton({ href, className = '', onClick, children, ...props }) {
  if (href) return <a className={className} href={href} {...props}>{children}</a>
  return <button className={className} onClick={onClick} type="button" {...props}>{children}</button>
}
