import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const shortcuts = {
  h: '/',
  b: '/blog',
  t: '/tools',
  i: '/installation',
  w: '/wifi',
  l: '/learning-paths',
  n: '/news',
  c: '/compare',
  g: '/glossary',
  s: '/cheatsheets',
  a: '/about',
  p: '/privacy-policy',
  d: '/disclaimer',
}

export default function useKeyboardShortcuts() {
  const navigate = useNavigate()
  const buffer = useRef('')
  const timer = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return

      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('toggle-shortcuts-help'))
        return
      }

      if (e.key === 'g' && !e.ctrlKey && !e.metaKey && buffer.current === '') {
        buffer.current = 'g'
        timer.current = setTimeout(() => { buffer.current = '' }, 500)
        return
      }

      if (buffer.current === 'g') {
        clearTimeout(timer.current)
        buffer.current = ''
        const route = shortcuts[e.key]
        if (route) {
          e.preventDefault()
          navigate(route)
        }
        return
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate])
}
