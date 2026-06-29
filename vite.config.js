import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function fixReactRefreshRuntime() {
  return {
    name: 'fix-react-refresh-runtime',
    transform(code, id) {
      if (id === '/@react-refresh') {
        return code.replace(
          'export default { injectIntoGlobalHook }',
          'export default { injectIntoGlobalHook, register, registerExportsForReactRefresh }'
        )
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), fixReactRefreshRuntime()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'vendor-react'
          }
        }
      }
    }
  }
})
