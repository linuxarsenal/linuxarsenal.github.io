import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/embedded/index.html.vue"
const data = JSON.parse("{\"path\":\"/embedded/\",\"title\":\"嵌入式Linux\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"嵌入式Linux\",\"index\":false,\"icon\":\"code\",\"category\":[\"嵌入式Linux\"]},\"readingTime\":{\"minutes\":0.24,\"words\":71},\"filePathRelative\":\"embedded/README.md\"}")
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
