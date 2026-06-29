import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { ProgressProvider } from './context/ProgressContext'
import { BookmarkProvider } from './context/BookmarkContext'

let App, eagerPages, eagerToolPages

export async function init() {
  App = (await import('./App.jsx')).default
  eagerPages = {}
  eagerToolPages = {}

  const tools = (await import('./data/tools.js')).default

  for (const t of tools) {
    eagerToolPages[t.id] = (await import(`./pages/tools/${t.file}.jsx`)).default
  }

  const pageNames = [
    ['Installation', './pages/Installation.jsx'],
    ['WifiHacking', './pages/WifiHacking.jsx'],
    ['BluetoothHacking', './pages/BluetoothHacking.jsx'],
    ['Payloads', './pages/Payloads.jsx'],
    ['Tools', './pages/Tools.jsx'],
    ['About', './pages/About.jsx'],
    ['PrivacyPolicy', './pages/PrivacyPolicy.jsx'],
    ['Terms', './pages/Terms.jsx'],
    ['Disclaimer', './pages/Disclaimer.jsx'],
    ['DMCA', './pages/DMCA.jsx'],
    ['Contact', './pages/Contact.jsx'],
    ['SitemapPage', './pages/Sitemap.jsx'],
    ['Blog', './pages/Blog.jsx'],
    ['BlogPost', './pages/BlogPost.jsx'],
    ['LearningPaths', './pages/LearningPaths.jsx'],
    ['ToolCompare', './pages/ToolCompare.jsx'],
    ['Glossary', './pages/Glossary.jsx'],
    ['Cheatsheets', './pages/Cheatsheets.jsx'],
    ['News', './pages/News.jsx'],
    ['Community', './pages/Community.jsx'],
    ['NotFound', './pages/NotFound.jsx'],
  ]
  for (const [key, path] of pageNames) {
    try {
      eagerPages[key] = (await import(path)).default
    } catch {}
  }
}

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <ThemeProvider>
          <LanguageProvider>
            <ProgressProvider>
              <BookmarkProvider>
                <App eagerPages={eagerPages} eagerToolPages={eagerToolPages} />
              </BookmarkProvider>
            </ProgressProvider>
          </LanguageProvider>
        </ThemeProvider>
      </StaticRouter>
    </React.StrictMode>
  )
}
