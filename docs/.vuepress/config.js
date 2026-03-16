/* VuePress 站点的基本配置文件 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'LinuxArsenal',
    description: 'Linux 技术分享',
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
          // NavbarLink
          {
            text: 'Foo',
            link: '/foo/',
          },
          // NavbarGroup
          {
            text: 'Group',
            prefix: '/group/',
            children: ['foo.md', 'bar.md'],
          },
          // 字符串 - 页面文件路径
          '/bar/README.md',
        ],

        sidebar: [
        // SidebarItem
        {
            text: 'Foo',
            prefix: '/foo/',
            link: '/foo/',
            children: [
            // SidebarItem
            {
                text: 'github',
                link: 'https://github.com',
                children: [],
            },
            // 字符串 - 页面文件路径
            'bar.md', // 解析为 `/foo/bar.md`
            '/ray.md', // 解析为 `/ray.md`
            ],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
        ],
      }),
})
