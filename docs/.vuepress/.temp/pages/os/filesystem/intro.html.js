import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/filesystem/intro.html.vue"
const data = JSON.parse("{\"path\":\"/os/filesystem/intro.html\",\"title\":\"文件系统基础\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文件系统基础\",\"icon\":\"folder\",\"order\":1,\"category\":[\"操作系统\"],\"tag\":[\"文件系统\",\"inode\"]},\"readingTime\":{\"minutes\":1.03,\"words\":309},\"filePathRelative\":\"os/filesystem/intro.md\"}")
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
