export const data = JSON.parse("{\"key\":\"v-6e19edb7\",\"path\":\"/demo/page.html\",\"title\":\"页面配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"页面配置\",\"icon\":\"page\",\"order\":1,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\"},\"headers\":[{\"level\":2,\"title\":\"页面信息\",\"slug\":\"页面信息\",\"link\":\"#页面信息\",\"children\":[]},{\"level\":2,\"title\":\"页面内容\",\"slug\":\"页面内容\",\"link\":\"#页面内容\",\"children\":[]},{\"level\":2,\"title\":\"页面结构\",\"slug\":\"页面结构\",\"link\":\"#页面结构\",\"children\":[]}],\"readingTime\":{\"minutes\":1.53,\"words\":459},\"filePathRelative\":\"demo/page.md\",\"localizedDate\":\"2020年1月1日\",\"excerpt\":\"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\\n\"}")

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
