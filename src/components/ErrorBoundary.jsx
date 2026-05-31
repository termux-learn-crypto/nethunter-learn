import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Kuch Gadbad Ho Gayi
            </h1>
            <p className="text-gray-400 mb-2">
              Page load karte waqt ek error aa gaya.
            </p>
            <p className="text-gray-500 text-sm mb-8 font-mono bg-dark-800 p-3 rounded-lg">
              {this.state.error?.message || 'Unknown error'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="btn-primary px-8 py-3 rounded-lg font-semibold text-dark-900"
              >
                Page Reload Karein
              </button>
              <Link
                to="/"
                className="btn-outline px-8 py-3 rounded-lg font-semibold text-neon-green border border-neon-green/30 hover:bg-neon-green/10"
              >
                Home Page Par Jayein
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
