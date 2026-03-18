/* ================================================
 * VuePress 站点配置文件
 * 
 * 本文件是 VuePress 站点的核心配置文件
 * 包含站点基本配置、主题配置、导航、侧边栏等
 * ================================================ */

/* ----------------------------------------------
 * 1. 导入依赖
 * ---------------------------------------------- */
import { viteBundler } from '@vuepress/bundler-vite'  // Vite 构建器，用于快速构建
import { defineUserConfig } from 'vuepress'           // VuePress 配置定义函数
import { hopeTheme } from 'vuepress-theme-hope'       // Hope 主题，提供丰富功能

/* ----------------------------------------------
 * 2. 站点基础配置
 * ---------------------------------------------- */
export default defineUserConfig({
    /* 站点基础路径
     * '/' - 部署在域名根目录
     * '/repo/' - 部署在子目录(如 GitHub Pages 项目页)
     */
    base: '/',

    /* 站点语言
     * 影响 HTML lang 属性、日期格式化等
     * 'zh-CN' - 简体中文
     * 'en-US' - 英语
     */
    lang: 'zh-CN',

    /* 浏览器标签和首页标题 */
    title: 'LinuxArsenal',

    /* 网站描述，用于 SEO 和社交分享 */
    description: 'Linux 技术分享',

    /* 使用的构建工具
     * viteBundler() - 使用 Vite 作为构建工具
     * 相比传统 webpack，Vite 启动更快、热更新更及时
     */
    bundler: viteBundler(),

    /* ----------------------------------------------
     * 3. 主题配置
     * ---------------------------------------------- */
    theme: hopeTheme({
        /* Logo 图片路径，相对于 public 目录
         * 显示在导航栏左侧
         */
        logo: '/pics/logo1.png',

        /* 文档目录名称，用于某些插件功能 */
        docsDir: 'docs',

        /* 暗色模式切换方式
         * 'toggle' - 显示切换按钮，用户可手动切换
         * 'auto' - 自动跟随系统设置
         * false - 禁用暗色模式
         */
        darkmode: 'toggle',

        /* ----------------------------------------------
         * 3.1 顶部导航栏 (navbar)
         * ----------------------------------------------
         * 显示在页面顶部的导航链接
         */
        navbar: [
            // 导航项：text 显示文本，link 跳转链接，icon 图标名称
            { text: '首页', link: '/', icon: 'home' },
            { text: '操作系统', link: '/os/', icon: 'computer' },
            { text: '嵌入式Linux', link: '/embedded/', icon: 'code' },
            { text: '关于', link: '/about/', icon: 'info' },

            // 下拉菜单示例
            // {
            //     text: '更多',
            //     icon: 'more',
            //     children: [
            //         { text: 'GitHub', link: 'https://github.com/xxx' },
            //         { text: '掘金', link: 'https://juejin.cn/xxx' },
            //     ],
            // },
        ],

        /* ----------------------------------------------
         * 3.2 侧边栏 (sidebar)
         * ----------------------------------------------
         * 显示在页面左侧的目录导航
         * 按路径前缀分组
         */
        sidebar: {
            /* 根路径和未匹配路径的默认侧边栏 */
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

            /* /os/ 路径下的页面侧边栏 */
            '/os/': [
                /* 第一项：章节概述
                 * 没有 prefix，children 中的 link 会拼接完整路径
                 */
                {
                    text: '操作系统',      // 分组标题
                    icon: 'computer',      // 图标名称
                    children: [
                        { text: '概述', link: '/os/' },  // 链接到章节首页
                    ],
                },

                /* 第二项：可折叠的子分组
                 * prefix - 子路径前缀，如 'intro' 实际链接为 /os/process/intro
                 * collapsible - 是否可折叠，true 时用户可收起/展开
                 */
                {
                    text: '进程管理',      // 分组标题
                    icon: 'process',       // 图标
                    prefix: '/os/process/', // 子路径前缀
                    collapsible: true,     // 允许折叠
                    children: [
                        { text: '进程与线程', link: 'intro' },      // 完整: /os/process/intro
                        { text: '进程调度', link: 'schedule' },    // 完整: /os/process/schedule
                        { text: '进程通信', link: 'ipc' },         // 完整: /os/process/ipc
                    ],
                },

                /* 内存管理分组 */
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

                /* 文件系统分组 */
                {
                    text: '文件系统',
                    icon: 'folder',
                    prefix: '/os/filesystem/',
                    collapsible: true,
                    children: [
                        { text: '文件系统基础', link: 'intro' },
                    ],
                },

                /* 网络系统分组 */
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

            /* /embedded/ 路径下的页面侧边栏 */
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

            /* /about/ 路径下的页面侧边栏 */
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

        /* ----------------------------------------------
         * 3.3 页面信息 (pageInfo)
         * ----------------------------------------------
         * 文章页面底部显示的元信息
         * 可用值: Author, Date, Category, Tag, ReadingTime, Word
         */
        pageInfo: ['Author', 'Date', 'ReadingTime', 'Category', 'Tag'],

        /* ----------------------------------------------
         * 3.4 博客功能配置
         * ----------------------------------------------
         * 是否启用博客功能
         * true - 启用博客模式(时间线、归档等)
         * false - 纯文档模式
         */
        blog: false,

        /* ----------------------------------------------
         * 3.5 页脚配置 (footer)
         * ----------------------------------------------
         * 显示在页面底部的版权信息
         */
        footer: 'LinuxArsenal | 嵌入式Linux技术分享',

        /* 是否在所有页面显示页脚 */
        displayFooter: true,

        /* ----------------------------------------------
         * 3.6 加密配置 (encrypt)
         * ----------------------------------------------
         * 用于加密特定页面，需要密码才能访问
         */
        encrypt: {
            // 全局加密，启用后所有页面都需要密码
            // global: true,

            // 按路径加密示例
            // '/zh/guide/': ['password1'],

            // 按 frontmatter 加密 (在 md 文件中设置)
            // encrypt: true
            // encrypt: ['password']
            global: false,  // 关闭全局加密
        },

        /* ----------------------------------------------
         * 3.7 插件配置 (plugins)
         * ----------------------------------------------
         * vuepress-theme-hope 内置插件配置
         */
        plugins: {
            /* 图片增强插件
             * 自动处理图片，优化加载性能
             */
            markdownImage: {
                lazyload: true,   // 懒加载，进入视口时才加载图片
                size: true,       // 自动添加 width/height，减少布局偏移
                figure: true,     // 支持图片标题 (markdown 图片 alt 文字)
            },

            /* 标签页插件
             * 支持在 Markdown 中使用标签页展示代码或内容
             */
            markdownTab: {
                tabs: true,       // 启用普通标签页
                codeTabs: true,   // 启用代码块标签页
            },
        },

        /* ----------------------------------------------
         * 3.8 Markdown 扩展配置
         * ----------------------------------------------
         * 启用各种 Markdown 语法扩展
         */
        markdown: {
            /* 启用文本对齐
             * 使用方式: <p align="center">居中</p>
             * 或 ::: align:center
             */
            align: true,

            /* 启用自定义属性
             * 使用方式: {#id .class style="color:red"}
             */
            attrs: true,

            /* 启用高亮标记
             * 使用方式: ==高亮文本==
             */
            mark: true,

            /* 启用折叠内容
             * 使用方式: ::: spoiler 点击查看
             * 内容 :::
             */
            spoiler: true,

            /* 启用下标
             * 使用方式: H~2~O
             */
            sub: true,

            /* 启用上标
             * 使用方式: 2^10^
             */
            sup: true,

            /* 启用任务列表
             * 使用方式: - [x] 已完成
             *           - [ ] 未完成
             */
            tasklist: true,

            /* 启用 Vue 语法高亮 (用于代码块)
             * 用于 Vue 组件的模板语法
             */
            vPre: true,
        },
    }),
})
