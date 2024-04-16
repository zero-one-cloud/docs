import { defineConfig } from "vitepress";

const lang = 'zh-CN'
const ogDescription = '全栈学习的好项目'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "零一",
  description: "全栈学习",
  lang,
  lastUpdated: false,
  head:[
    ['meta', {property: 'og:title', content: 'zero-one-cloud'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "./logo.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "🚀 Guide", link: "/guide/introduce/project", activeMatch:'/guide/' },
      { text: "🛠️ 数据库", link: "/database/", activeMatch: '/database/'},
      {
        text: "代码仓库",
        items: [
          {
            text: "github",
            link: "https://github.com/zero-one-cloud",
            target: "_target",
          },
          {
            text: "gitee",
            link: "https://gitee.com/zero-one-cloud",
            target: "_target",
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': sidebarGuide(),
      '/database/': sidebarDatabase()
    },

    editLink: {
      pattern: "https://github.com/zero-one-cloud/docs/edit/master/:path",
      text: "在Github上编辑此页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zero-one-cloud" },
    ],
    footer: {
      message: 'MIT License',
      copyright: `粤ICP备1111号-1 Copyright © 2020-${new Date().getFullYear()}`,
    },
    lastUpdatedText: '最后一次更新',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
});

// sidebarGuide
function sidebarGuide() {
  return [
    {
      text: "介绍",
      items: [{ text: "项目介绍", link: "/guide/introduce/project" }],
    },
    {
      text: "快速开始",
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: "环境配置",
          link: "/guide/quick-start/env",
        },
        {
          text: "初始化",
          link: "/guide/quick-start/initialization",
        },
      ],
    },
    {
      text: "常见问题",
      link: "/guide/qa",
    },
  ];
}

// sidebarDatabase
function sidebarDatabase() {
  return [
    {
      text: '表和字段',
      collapsible: true,
      items: [
        {
          text: '总览',
          link: '/database/'
        },
        {
          text: '系统',
          collapsed: true,
          collapsible: true,
          items: [
            { text:'configs全局配置表', link: '/database/systems/configs'},
            { text:'code_messages状态码信息表', link: '/database/systems/code-messages'}
          ]
        },
      ]
    }
  ]
}