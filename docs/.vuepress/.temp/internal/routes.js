export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页","icon":"home"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于","icon":"info"} }],
  ["/embedded/", { loader: () => import(/* webpackChunkName: "embedded_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/embedded/index.html.js"), meta: {"title":"嵌入式Linux","icon":"code"} }],
  ["/os/", { loader: () => import(/* webpackChunkName: "os_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/index.html.js"), meta: {"title":"操作系统","icon":"computer"} }],
  ["/embedded/driver/char-device.html", { loader: () => import(/* webpackChunkName: "embedded_driver_char-device.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/embedded/driver/char-device.html.js"), meta: {"title":"字符设备驱动","icon":"code","order":1} }],
  ["/os/filesystem/intro.html", { loader: () => import(/* webpackChunkName: "os_filesystem_intro.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/filesystem/intro.html.js"), meta: {"title":"文件系统基础","icon":"folder","order":1} }],
  ["/os/network/io-multiplex.html", { loader: () => import(/* webpackChunkName: "os_network_io-multiplex.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/network/io-multiplex.html.js"), meta: {"title":"IO 多路复用","icon":"network","order":1} }],
  ["/os/memory/page-replace.html", { loader: () => import(/* webpackChunkName: "os_memory_page-replace.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/memory/page-replace.html.js"), meta: {"title":"页面置换算法","icon":"shuffle","order":2} }],
  ["/os/memory/virtual.html", { loader: () => import(/* webpackChunkName: "os_memory_virtual.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/memory/virtual.html.js"), meta: {"title":"虚拟内存","icon":"memory","order":1} }],
  ["/os/process/intro.html", { loader: () => import(/* webpackChunkName: "os_process_intro.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/intro.html.js"), meta: {"title":"进程与线程","icon":"process","order":1} }],
  ["/os/process/ipc.html", { loader: () => import(/* webpackChunkName: "os_process_ipc.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/ipc.html.js"), meta: {"title":"进程通信（IPC）","icon":"share","order":3} }],
  ["/os/process/schedule.html", { loader: () => import(/* webpackChunkName: "os_process_schedule.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/schedule.html.js"), meta: {"title":"进程调度","icon":"sort","order":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/embedded/driver/", { loader: () => import(/* webpackChunkName: "embedded_driver_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/embedded/driver/index.html.js"), meta: {"title":"Driver"} }],
  ["/os/filesystem/", { loader: () => import(/* webpackChunkName: "os_filesystem_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/filesystem/index.html.js"), meta: {"title":"Filesystem"} }],
  ["/os/network/", { loader: () => import(/* webpackChunkName: "os_network_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/network/index.html.js"), meta: {"title":"Network"} }],
  ["/os/memory/", { loader: () => import(/* webpackChunkName: "os_memory_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/memory/index.html.js"), meta: {"title":"Memory"} }],
  ["/os/process/", { loader: () => import(/* webpackChunkName: "os_process_index.html" */"D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/index.html.js"), meta: {"title":"Process"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
