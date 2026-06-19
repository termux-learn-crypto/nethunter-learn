import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import CookieConsent from './components/CookieConsent'
import JsonLd, { websiteJsonLd, organizationJsonLd } from './components/JsonLd'
import Home from './pages/Home'
import tools, { toolRoutes } from './data/tools'

const toolPages = Object.fromEntries(
  tools.map(t => [t.id, lazy(() => import(`./pages/tools/${t.file}.jsx`))])
)

const Installation = lazy(() => import('./pages/Installation'))
const WifiHacking = lazy(() => import('./pages/WifiHacking'))
const BluetoothHacking = lazy(() => import('./pages/BluetoothHacking'))
const Payloads = lazy(() => import('./pages/Payloads'))
const Tools = lazy(() => import('./pages/Tools'))
const About = lazy(() => import('./pages/About'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const DMCA = lazy(() => import('./pages/DMCA'))
const Contact = lazy(() => import('./pages/Contact'))
const SitemapPage = lazy(() => import('./pages/Sitemap'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const LearningPaths = lazy(() => import('./pages/LearningPaths'))
const ToolCompare = lazy(() => import('./pages/ToolCompare'))
const Glossary = lazy(() => import('./pages/Glossary'))
const Cheatsheets = lazy(() => import('./pages/Cheatsheets'))
const News = lazy(() => import('./pages/News'))
const Community = lazy(() => import('./pages/Community'))

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

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
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
          <Route path="/installation" element={<Installation />} />
          <Route path="/wifi" element={<WifiHacking />} />
          <Route path="/bluetooth" element={<BluetoothHacking />} />
          <Route path="/payloads" element={<Payloads />} />
          <Route path="/tools" element={<Tools />} />
          {toolRoutes.map(route => {
            const tool = tools.find(t => t.route === route)
            const Page = toolPages[tool.id]
            return <Route key={route} path={route} element={<Page />} />
          })}
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/compare" element={<ToolCompare />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/cheatsheets" element={<Cheatsheets />} />
          <Route path="/news" element={<News />} />
          <Route path="/community" element={<Community />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      </ErrorBoundary>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  )
}
