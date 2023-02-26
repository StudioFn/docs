import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "和圈APP",
      description: "一个学习交流社区",
    },
  },

  theme,

  shouldPrefetch: false,
});
