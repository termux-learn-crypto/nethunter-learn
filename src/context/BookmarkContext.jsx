import { createContext, useContext, useState, useEffect } from 'react'

const BookmarkContext = createContext()

const STORAGE_KEY = 'nethunter_bookmarks'

function loadBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(loadBookmarks)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggleBookmark = (path, title, type = 'tool') => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.path === path)
      if (exists) {
        return prev.filter(b => b.path !== path)
      }
      return [...prev, { path, title, type, date: new Date().toISOString() }]
    })
  }

  const isBookmarked = (path) => bookmarks.some(b => b.path === path)

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  return useContext(BookmarkContext)
}
