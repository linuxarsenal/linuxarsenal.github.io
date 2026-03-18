import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/memory/virtual.html.vue"
const data = JSON.parse("{\"path\":\"/os/memory/virtual.html\",\"title\":\"虚拟内存\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"虚拟内存\",\"icon\":\"memory\",\"order\":1,\"category\":[\"操作系统\"],\"tag\":[\"内存\",\"虚拟内存\",\"分页\"]},\"readingTime\":{\"minutes\":1.12,\"words\":336},\"filePathRelative\":\"os/memory/virtual.md\"}")
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
