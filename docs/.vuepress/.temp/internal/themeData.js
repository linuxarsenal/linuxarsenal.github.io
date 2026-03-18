export const themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"/pics/logo1.png\",\"docsDir\":\"docs\",\"darkmode\":\"toggle\",\"pageInfo\":[\"Author\",\"Date\",\"ReadingTime\",\"Category\",\"Tag\"],\"blog\":false,\"footer\":\"LinuxArsenal | 嵌入式Linux技术分享\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routerLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"home\"},{\"text\":\"操作系统\",\"link\":\"/os/\",\"icon\":\"computer\"},{\"text\":\"嵌入式Linux\",\"link\":\"/embedded/\",\"icon\":\"code\"},{\"text\":\"关于\",\"link\":\"/about/\",\"icon\":\"info\"}],\"sidebar\":{\"/os/\":[{\"text\":\"操作系统\",\"icon\":\"computer\",\"children\":[{\"text\":\"概述\",\"link\":\"/os/\"}]},{\"text\":\"进程管理\",\"icon\":\"process\",\"prefix\":\"/os/process/\",\"collapsible\":true,\"children\":[{\"text\":\"进程与线程\",\"link\":\"intro\"},{\"text\":\"进程调度\",\"link\":\"schedule\"},{\"text\":\"进程通信\",\"link\":\"ipc\"}]},{\"text\":\"内存管理\",\"icon\":\"memory\",\"prefix\":\"/os/memory/\",\"collapsible\":true,\"children\":[{\"text\":\"虚拟内存\",\"link\":\"virtual\"},{\"text\":\"页面置换算法\",\"link\":\"page-replace\"}]},{\"text\":\"文件系统\",\"icon\":\"folder\",\"prefix\":\"/os/filesystem/\",\"collapsible\":true,\"children\":[{\"text\":\"文件系统基础\",\"link\":\"intro\"}]},{\"text\":\"网络系统\",\"icon\":\"network\",\"prefix\":\"/os/network/\",\"collapsible\":true,\"children\":[{\"text\":\"IO 多路复用\",\"link\":\"io-multiplex\"}]}],\"/embedded/\":[{\"text\":\"嵌入式Linux\",\"icon\":\"code\",\"children\":[{\"text\":\"概述\",\"link\":\"/embedded/\"}]},{\"text\":\"Linux 驱动开发\",\"icon\":\"code\",\"prefix\":\"/embedded/driver/\",\"collapsible\":true,\"children\":[{\"text\":\"字符设备驱动\",\"link\":\"char-device\"}]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
