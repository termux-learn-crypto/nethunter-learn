import { useEffect, useRef } from 'react'

export default function AdUnit({ slot, format = 'auto', className = '' }) {
  const adRef = useRef(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
      initialized.current = true
    } catch {}
  }, [])

  return (
    <div className={`my-6 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3924988565581765"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
