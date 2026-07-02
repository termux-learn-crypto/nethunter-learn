import { useEffect, useRef } from 'react'

export default function AdUnit({ slot, format = 'auto', layout, className = '' }) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    const timer = setTimeout(() => {
      try {
        if (window.adsbygoogle && document.querySelector(`.adsbygoogle[data-ad-slot="${slot}"]`)) {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
          pushed.current = true
        }
      } catch {}
    }, 200)
    return () => clearTimeout(timer)
  }, [slot])

  return (
    <div className={`my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { 'data-ad-layout': layout } : {})}
      />
    </div>
  )
}
