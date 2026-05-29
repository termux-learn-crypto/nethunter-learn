import { Link } from 'react-router-dom'

export default function Card({ title, description, icon, to, color = 'green' }) {
  const colorMap = {
    green: {
      border: 'border-neon-green/20 hover:border-neon-green/60',
      shadow: 'hover:shadow-neon-green/20',
      icon: 'text-neon-green',
      title: 'group-hover:text-neon-green',
    },
    cyan: {
      border: 'border-neon-cyan/20 hover:border-neon-cyan/60',
      shadow: 'hover:shadow-neon-cyan/20',
      icon: 'text-neon-cyan',
      title: 'group-hover:text-neon-cyan',
    },
    red: {
      border: 'border-neon-red/20 hover:border-neon-red/60',
      shadow: 'hover:shadow-neon-red/20',
      icon: 'text-neon-red',
      title: 'group-hover:text-neon-red',
    },
  }

  const c = colorMap[color] || colorMap.green

  const content = (
    <div className={`group bg-dark-700/50 backdrop-blur-sm border ${c.border} rounded-xl p-6
                     transition-all duration-300 hover:scale-105 hover:shadow-lg ${c.shadow}
                     cursor-pointer h-full`}>
      <div className={`text-4xl mb-4 ${c.icon}`}>{icon}</div>
      <h3 className={`text-xl font-heading font-bold text-white mb-2 transition-colors ${c.title}`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center text-neon-green text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Explore</span>
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )

  if (to) {
    return <Link to={to}>{content}</Link>
  }

  return content
}
