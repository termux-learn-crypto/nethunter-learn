import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

const STORAGE_KEY = 'nethunter_progress'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const toggleLearned = (toolPath) => {
    setProgress(prev => {
      const next = { ...prev }
      if (next[toolPath]) {
        delete next[toolPath]
      } else {
        next[toolPath] = { learned: true, date: new Date().toISOString() }
      }
      return next
    })
  }

  const isLearned = (toolPath) => !!progress[toolPath]

  const getStats = () => {
    const total = Object.keys(progress).length
    return { total, percentage: Math.round((total / 77) * 100) }
  }

  return (
    <ProgressContext.Provider value={{ progress, toggleLearned, isLearned, getStats }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}
