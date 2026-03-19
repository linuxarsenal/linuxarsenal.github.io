import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'LinuxArsenal',
    description: 'Linux 技术分享',
    bundler: viteBundler(),

    head: [
        ['link', { rel: 'icon', href: '/pics/logo.png' }],
    ],

    theme: hopeTheme({
        logo: '/pics/logo.png',
        docsDir: 'docs',
        darkmode: 'toggle',

        plugins: {
            icon: {
                type: 'fontawesome',
            },
        },

        navbar: [
            { text: '首页', link: '/', icon: 'home' },
            { text: '操作系统', link: '/os/', icon: 'desktop' },
            { text: '嵌入式Linux', link: '/embedded/', icon: 'microchip' },
            { text: '关于', link: '/about/', icon: 'info' },
        ],

        sidebar: {
            '/': [
                {
                    text: '快速导航',
                    icon: 'home',
                    children: [
                        { text: '首页', link: '/' },
                        { text: '关于', link: '/about/' },
                    ],
                },
            ],

            '/os/': [
                {
                    text: '操作系统',
                    icon: 'computer',
                    children: [
                        { text: '概述', link: '/os/' },
                    ],
                },
                {
                    text: '进程管理',
                    icon: 'process',
                    prefix: '/os/process/',
                    collapsible: true,
                    children: [
                        { text: '进程与线程', link: 'intro' },
                        { text: '进程调度', link: 'schedule' },
                        { text: '进程通信', link: 'ipc' },
                    ],
                },
                {
                    text: '内存管理',
                    icon: 'memory',
                    prefix: '/os/memory/',
                    collapsible: true,
                    children: [
                        { text: '虚拟内存', link: 'virtual' },
                        { text: '页面置换算法', link: 'page-replace' },
                    ],
                },
                {
                    text: '文件系统',
                    icon: 'folder',
                    prefix: '/os/filesystem/',
                    collapsible: true,
                    children: [
                        { text: '文件系统基础', link: 'intro' },
                    ],
                },
                {
                    text: '网络系统',
                    icon: 'network',
                    prefix: '/os/network/',
                    collapsible: true,
                    children: [
                        { text: 'IO 多路复用', link: 'io-multiplex' },
                    ],
                },
            ],

            '/embedded/': [
                {
                    text: '嵌入式Linux',
                    icon: 'code',
                    children: [
                        { text: '概述', link: '/embedded/' },
                    ],
                },
                {
                    text: 'Linux 驱动开发',
                    icon: 'code',
                    prefix: '/embedded/driver/',
                    collapsible: true,
                    children: [
                        { text: '字符设备驱动', link: 'char-device' },
                    ],
                },
            ],

            '/about/': [
                {
                    text: '关于',
                    icon: 'info',
                    children: [
                        { text: '关于作者', link: '/about/' },
                    ],
                },
            ],
        },

        pageInfo: ['Author', 'Date', 'ReadingTime', 'Category', 'Tag'],

        blog: false,

        footer: 'LinuxArsenal | 嵌入式Linux技术分享',
        displayFooter: true,

        encrypt: {
            global: false,
        },

        markdown: {
            align: true,
            attrs: true,
            mark: true,
            spoiler: true,
            sub: true,
            sup: true,
            tasklist: true,
            vPre: true,
            tabs: true,
            codeTabs: true,
        },
    }),

    debug: true,
})
