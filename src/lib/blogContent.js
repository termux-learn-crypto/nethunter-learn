export async function getBlogContent(id) {
  try {
    const mod = await import(/* @vite-ignore */ `../content/blog/${id}.md?raw`)
    const raw = mod.default || ''
    const body = raw.replace(/---[\s\S]*?---\n*/, '').trim()
    const headings = []
    for (const line of body.split('\n')) {
      const m = line.match(/^(##|###)\s+(.+)/)
      if (m) {
        const text = m[2].trim()
        const slug = text.toLowerCase().replace(/[^a-z0-9\u0900-\u097f]+/g, '-').replace(/(^-|-$)/g, '')
        headings.push({ level: m[1].length, text, slug })
      }
    }
    return { body, headings }
  } catch {
    return { body: '', headings: [] }
  }
}
