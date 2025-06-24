import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

const htmlFiles = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.html'))
  .reduce((entries, file) => {
    const name = file.replace('.html', '')
    entries[name] = resolve(__dirname, file)
    return entries
  }, {})

export default defineConfig({
  base: "/newdesingweb/",
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    rollupOptions: {
      input: htmlFiles
    }
  }
})
// This Vite configuration file sets up a project with multiple HTML entry points.
// It reads all HTML files in the current directory and uses them as entry points for the build.