import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
 
  {
    text: "More",
    icon: "edit",
    prefix: "/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "edit",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "edit", link: "1" },
      //     { text: "苹果2", icon: "edit", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
    ],
  },
  
]);
