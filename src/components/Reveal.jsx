import useReveal from '../hooks/useReveal.js'

/**
 * Wraps children and fades/slides them into view once they scroll
 * into the viewport. `delay` is in ms and staggers grid items.
 */
export default function Reveal({ children, delay = 0, variant = 'reveal', className = '', as: Tag = 'div', ...rest }) {
  const [ref, inView] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`${variant} ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
