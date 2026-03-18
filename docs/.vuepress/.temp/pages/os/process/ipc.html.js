import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/os/process/ipc.html.vue"
const data = JSON.parse("{\"path\":\"/os/process/ipc.html\",\"title\":\"进程通信（IPC）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"进程通信（IPC）\",\"icon\":\"share\",\"order\":3,\"category\":[\"操作系统\"],\"tag\":[\"IPC\",\"管道\",\"共享内存\"]},\"readingTime\":{\"minutes\":1.03,\"words\":309},\"filePathRelative\":\"os/process/ipc.md\"}")
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
