import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/memory/page-replace.html.vue"
const data = JSON.parse("{\"path\":\"/os/memory/page-replace.html\",\"title\":\"页面置换算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"页面置换算法\",\"icon\":\"shuffle\",\"order\":2,\"category\":[\"操作系统\"],\"tag\":[\"内存\",\"页面置换\"]},\"readingTime\":{\"minutes\":0.97,\"words\":291},\"filePathRelative\":\"os/memory/page-replace.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
