import { describe, it, expect } from 'vitest'
import tools, { getToolByRoute, getPrevNext, toolCount, toolRoutes } from '../data/tools'

describe('tools data', () => {
  it('should have 77 tools', () => {
    expect(toolCount).toBe(77)
    expect(tools).toHaveLength(77)
  })

  it('should have unique IDs', () => {
    const ids = tools.map(t => t.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('should have unique routes', () => {
    const routes = tools.map(t => t.route)
    expect(new Set(routes).size).toBe(routes.length)
  })

  it('should match toolRoutes length', () => {
    expect(toolRoutes).toHaveLength(toolCount)
  })

  it('should have all required fields', () => {
    for (const tool of tools) {
      expect(tool.id).toBeTruthy()
      expect(tool.name).toBeTruthy()
      expect(tool.route).toBeTruthy()
      expect(tool.category).toBeTruthy()
      expect(tool.file).toBeTruthy()
      expect(tool.route.startsWith('/tool/')).toBe(true)
    }
  })
})

describe('getToolByRoute', () => {
  it('should return tool for valid route', () => {
    const tool = getToolByRoute('/tool/nmap')
    expect(tool).toBeTruthy()
    expect(tool.name).toBe('Nmap')
    expect(tool.id).toBe('nmap')
  })

  it('should return null for invalid route', () => {
    expect(getToolByRoute('/tool/nonexistent')).toBeNull()
  })
})

describe('getPrevNext', () => {
  it('should return prev/next for middle tool', () => {
    const { prev, next } = getPrevNext('/tool/nmap')
    expect(prev).toBeTruthy()
    expect(next).toBeTruthy()
    expect(prev.id).toBe('aircrack-ng')
    expect(next.id).toBe('metasploit-framework')
  })

  it('should return null prev for first tool', () => {
    const { prev, next } = getPrevNext('/tool/aircrack-ng')
    expect(prev).toBeNull()
    expect(next).toBeTruthy()
  })

  it('should return null next for last tool', () => {
    const { prev, next } = getPrevNext('/tool/weevely')
    expect(prev).toBeTruthy()
    expect(next).toBeNull()
  })

  it('should return null both for unknown route', () => {
    const { prev, next } = getPrevNext('/unknown')
    expect(prev).toBeNull()
    expect(next).toBeNull()
  })
})
