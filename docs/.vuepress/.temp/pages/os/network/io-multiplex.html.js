import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/network/io-multiplex.html.vue"
const data = JSON.parse("{\"path\":\"/os/network/io-multiplex.html\",\"title\":\"IO 多路复用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"IO 多路复用\",\"icon\":\"network\",\"order\":1,\"category\":[\"操作系统\"],\"tag\":[\"IO\",\"select\",\"poll\",\"epoll\"]},\"readingTime\":{\"minutes\":1.3,\"words\":391},\"filePathRelative\":\"os/network/io-multiplex.md\"}")
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
