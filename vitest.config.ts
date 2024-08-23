import { URL } from 'node:url'
import {mergeConfig, defineConfig, configDefaults} from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            global: true,
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            alias: {
                '@/': new URL('./src/', import.meta.url).pathname
            },
            setupFiles: './setupTest.js'
        }
    })
)
