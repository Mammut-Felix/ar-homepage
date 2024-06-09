/// <reference types="unlighthouse" />
import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: 'localhost:3000',
  scanner: {
    throttle: false,
    samples: 3
  },
  puppeteerClusterOptions: {
    maxConcurrency: 1
  }
})
