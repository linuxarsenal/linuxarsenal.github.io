import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',
    language: 'zh-CN',
    title: 'VuePress',
    description: 'Vue-powered Static Site Generator',
    bundler: viteBundler(),
    theme: defaultTheme(),
})
