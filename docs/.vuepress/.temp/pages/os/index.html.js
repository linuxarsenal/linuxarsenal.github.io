import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/index.html.vue"
const data = JSON.parse("{\"path\":\"/os/\",\"title\":\"操作系统\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"操作系统\",\"index\":false,\"icon\":\"computer\",\"category\":[\"操作系统\"]},\"readingTime\":{\"minutes\":0.49,\"words\":148},\"filePathRelative\":\"os/README.md\"}")
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
