import { useState } from 'react'

export default function CodeBlock({ code, title, language = 'bash' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-neon-green/30">
      {title && (
        <div className="bg-dark-700 px-4 py-2 flex items-center justify-between border-b border-neon-green/20">
          <span className="text-neon-cyan text-xs font-mono">{title}</span>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-xs">{language}</span>
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:text-neon-green text-xs transition-colors"
            >
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>
      )}
      <div className="bg-dark-900 p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-green-300 whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  )
}
