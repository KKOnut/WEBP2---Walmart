import { defineConfig } from 'vite'
import { glob } from 'glob'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('**/*.html', { ignore: ['node_modules/**', 'dist/**'] })
          .map(file => [
            // Use the file path relative to root as the entry name (remove .html)
            path.relative(process.cwd(), file).replace(/\.html$/, ''),
            path.resolve(__dirname, file)
          ])
      )
    }
  }
})