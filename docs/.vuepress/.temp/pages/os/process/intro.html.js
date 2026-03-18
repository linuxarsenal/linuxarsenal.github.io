import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/intro.html.vue"
const data = JSON.parse("{\"path\":\"/os/process/intro.html\",\"title\":\"进程与线程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"进程与线程\",\"icon\":\"process\",\"order\":1,\"category\":[\"操作系统\"],\"tag\":[\"进程\",\"线程\"]},\"readingTime\":{\"minutes\":0.92,\"words\":276},\"filePathRelative\":\"os/process/intro.md\"}")
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
