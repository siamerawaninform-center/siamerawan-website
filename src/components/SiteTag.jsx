export default function SiteTag({ src, alt, label, className = '' }) {
  return (
    <div className={`site-tag ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {label && <span className="tag-label">{label}</span>}
    </div>
  )
}
