import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/schedule.html.vue"
const data = JSON.parse("{\"path\":\"/os/process/schedule.html\",\"title\":\"进程调度\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"进程调度\",\"icon\":\"sort\",\"order\":2,\"category\":[\"操作系统\"],\"tag\":[\"调度\",\"算法\"]},\"readingTime\":{\"minutes\":0.91,\"words\":272},\"filePathRelative\":\"os/process/schedule.md\"}")
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
