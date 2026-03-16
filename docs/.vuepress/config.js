import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'LinuxArsenal OK',
    description: 'Linux 技术分享',
    bundler: viteBundler(),
    theme: defaultTheme(),
})
