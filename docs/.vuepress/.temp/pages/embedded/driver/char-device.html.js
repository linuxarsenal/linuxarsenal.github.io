import comp from "D:/Workspace/Github/MyBlog/linuxarsenal.github.io/docs/.vuepress/.temp/pages/embedded/driver/char-device.html.vue"
const data = JSON.parse("{\"path\":\"/embedded/driver/char-device.html\",\"title\":\"字符设备驱动\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"字符设备驱动\",\"icon\":\"code\",\"order\":1,\"category\":[\"嵌入式Linux\"],\"tag\":[\"驱动\",\"字符设备\"]},\"readingTime\":{\"minutes\":0.9,\"words\":271},\"filePathRelative\":\"embedded/driver/char-device.md\"}")
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
