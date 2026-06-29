import { lazy, Suspense, createElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ShortcutsHelp from './components/ShortcutsHelp'
import ErrorBoundary from './components/ErrorBoundary'
import CookieConsent from './components/CookieConsent'
import JsonLd, { websiteJsonLd, organizationJsonLd } from './components/JsonLd'
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts'
import Home from './pages/Home'
import tools, { toolRoutes } from './data/tools'

function PageLoader() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-neon-green/30 border-t-neon-green rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

function AppInner() {
  useKeyboardShortcuts()
  return null
}

export default function App({ eagerPages, eagerToolPages }) {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <AppInner />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={organizationJsonLd()} />
      <ErrorBoundary>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-neon-green focus:text-dark-900 focus:rounded-lg focus:font-semibold">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={createElement(eagerPages?.Installation || lazy(() => import('./pages/Installation')))} />
          <Route path="/wifi" element={createElement(eagerPages?.WifiHacking || lazy(() => import('./pages/WifiHacking')))} />
          <Route path="/bluetooth" element={createElement(eagerPages?.BluetoothHacking || lazy(() => import('./pages/BluetoothHacking')))} />
          <Route path="/payloads" element={createElement(eagerPages?.Payloads || lazy(() => import('./pages/Payloads')))} />
          <Route path="/tools" element={createElement(eagerPages?.Tools || lazy(() => import('./pages/Tools')))} />
          {toolRoutes.map(route => {
            const tool = tools.find(t => t.route === route)
            const Page = eagerToolPages?.[tool.id] || lazy(() => import(`./pages/tools/${tool.file}.jsx`))
            return <Route key={route} path={route} element={createElement(Page)} />
          })}
          <Route path="/about" element={createElement(eagerPages?.About || lazy(() => import('./pages/About')))} />
          <Route path="/privacy-policy" element={createElement(eagerPages?.PrivacyPolicy || lazy(() => import('./pages/PrivacyPolicy')))} />
          <Route path="/terms" element={createElement(eagerPages?.Terms || lazy(() => import('./pages/Terms')))} />
          <Route path="/disclaimer" element={createElement(eagerPages?.Disclaimer || lazy(() => import('./pages/Disclaimer')))} />
          <Route path="/dmca" element={createElement(eagerPages?.DMCA || lazy(() => import('./pages/DMCA')))} />
          <Route path="/contact" element={createElement(eagerPages?.Contact || lazy(() => import('./pages/Contact')))} />
          <Route path="/blog" element={createElement(eagerPages?.Blog || lazy(() => import('./pages/Blog')))} />
          <Route path="/blog/:slug" element={createElement(eagerPages?.BlogPost || lazy(() => import('./pages/BlogPost')))} />
          <Route path="/learning-paths" element={createElement(eagerPages?.LearningPaths || lazy(() => import('./pages/LearningPaths')))} />
          <Route path="/compare" element={createElement(eagerPages?.ToolCompare || lazy(() => import('./pages/ToolCompare')))} />
          <Route path="/glossary" element={createElement(eagerPages?.Glossary || lazy(() => import('./pages/Glossary')))} />
          <Route path="/cheatsheets" element={createElement(eagerPages?.Cheatsheets || lazy(() => import('./pages/Cheatsheets')))} />
          <Route path="/news" element={createElement(eagerPages?.News || lazy(() => import('./pages/News')))} />
          <Route path="/community" element={createElement(eagerPages?.Community || lazy(() => import('./pages/Community')))} />
          <Route path="/sitemap" element={createElement(eagerPages?.SitemapPage || lazy(() => import('./pages/Sitemap')))} />
          <Route path="*" element={createElement(eagerPages?.NotFound || lazy(() => import('./pages/NotFound')))} />
        </Routes>
        </Suspense>
      </main>
      </ErrorBoundary>
      <ShortcutsHelp />
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  )
}
