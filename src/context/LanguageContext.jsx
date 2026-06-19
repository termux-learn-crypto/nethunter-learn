import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  hi: {
    nav: {
      home: 'Home',
      install: 'Install',
      tools: 'Tools',
      blog: 'Blog',
      cheat: 'Cheat',
      news: 'News',
      about: 'About',
      search: 'Search',
    },
    common: {
      loading: 'Loading...',
      search: 'Search karein...',
      noResults: 'Kuch nahi mila',
      previous: 'पिछला',
      next: 'अगला',
      page: 'पेज',
      back: 'वापस जाएं',
      readMore: 'Padhein',
      copyLink: 'लिंक कॉपी करें',
    },
    blog: {
      title: 'Blog & Articles',
      featured: 'Featured Articles',
      all: 'Sabhi Articles',
      newsletter: 'Newsletter Subscribe Karein',
      readTime: 'पढ़ने का समय',
      category: 'श्रेणी',
      tags: 'टैग्स',
      related: 'संबंधित लेख',
      noPosts: 'Koi article nahi mila',
      clearFilters: 'Saare filters clear karein',
      subscribe: 'Subscribe',
    },
    tools: {
      title: 'Tools Reference',
      search: 'Tools search karein...',
      allCategories: 'All',
      noResults: 'se koi tool nahi mila',
      fullGuide: 'Full Guide',
      commands: 'Common Commands',
    },
    toc: {
      title: 'विषय सूची',
    },
    footer: {
      description: 'Kali Nethunter seekhne ka sabse acha platform.',
      tutorials: 'Tutorials',
      legal: 'Legal & Policy',
      resources: 'Resources',
      copyright: 'All Rights Reserved',
      disclaimer: 'Yeh website sirf educational purposes ke liye hai.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      install: 'Install',
      tools: 'Tools',
      blog: 'Blog',
      cheat: 'Cheat',
      news: 'News',
      about: 'About',
      search: 'Search',
    },
    common: {
      loading: 'Loading...',
      search: 'Search...',
      noResults: 'No results found',
      previous: 'Previous',
      next: 'Next',
      page: 'Page',
      back: 'Go back',
      readMore: 'Read more',
      copyLink: 'Copy link',
    },
    blog: {
      title: 'Blog & Articles',
      featured: 'Featured Articles',
      all: 'All Articles',
      newsletter: 'Subscribe to Newsletter',
      readTime: 'min read',
      category: 'Category',
      tags: 'Tags',
      related: 'Related Articles',
      noPosts: 'No articles found',
      clearFilters: 'Clear all filters',
      subscribe: 'Subscribe',
    },
    tools: {
      title: 'Tools Reference',
      search: 'Search tools...',
      allCategories: 'All',
      noResults: 'No tools found for',
      fullGuide: 'Full Guide',
      commands: 'Common Commands',
    },
    toc: {
      title: 'Table of Contents',
    },
    footer: {
      description: 'Best platform to learn Kali Nethunter.',
      tutorials: 'Tutorials',
      legal: 'Legal & Policy',
      resources: 'Resources',
      copyright: 'All Rights Reserved',
      disclaimer: 'This website is for educational purposes only.',
    },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'hi'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang] || translations.hi

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
