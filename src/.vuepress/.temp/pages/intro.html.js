export const data = JSON.parse("{\"key\":\"v-184f4da6\",\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"info\"},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":5},\"filePathRelative\":\"intro.md\",\"excerpt\":\"<h1> 介绍页</h1>\\n\"}")

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
