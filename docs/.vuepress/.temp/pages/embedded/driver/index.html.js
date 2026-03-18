import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/embedded/driver/index.html.vue"
const data = JSON.parse("{\"path\":\"/embedded/driver/\",\"title\":\"Driver\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Driver\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
