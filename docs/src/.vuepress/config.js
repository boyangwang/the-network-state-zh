const { description } = require('../../package')

module.exports = {
  base: '/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '网络国家',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:site', content: '@thenetworkstate' }],
    ['meta', { name: 'twitter:creator', content: '@boyang0913' }],
    ['meta', { name: 'og:url', content: 'https://www.thenetworkstate-zh.com/' }],
    ['meta', { name: 'og:title', content: '网络国家 The Network State' }],
    ['meta', { name: 'og:image', content: 'https://www.thenetworkstate-zh.com/thenetworkstate-logo.jpg' }],
    ['meta', { name: 'og:description', content: '网络国家中文译本 v1.0' }],
      [
          'script',
          {
              async: true,
              src: 'https://www.googletagmanager.com/gtag/js?id=G-3RP62BH87G',
          },
      ],
      [
          'script',
          {},
          [
              "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-3RP62BH87G');",
          ],
      ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '编者序',
        link: '/foreword/',
      },
      {
        text: 'Ch 1 快速开始',
        link: '/Ch-1/',
      },
      {
        text: 'Ch 2 作为轨迹的历史',
        link: '/Ch-2/'
      },
      {
        text: 'Ch 3 三极时刻',
        link: '/Ch-3/'
      },
      {
        text: 'Ch 4 去中心化、重中心化',
        link: '/Ch-4/'
      },
      {
        text: 'Ch 5 从民族国家到网络国家',
        link: '/Ch-5/'
      },                  
      {
        text: 'Ch 6 附录',
        link: '/Ch-6/'
      },                    
    ],
    sidebar: {
      'foreword': [{
        title: '编者序',
        collapsable: false,
        children: [
          '',
          'FAQ',
        ]
      }],
      '/Ch-1/': [
        {
          title: '快速开始',
          collapsable: false,
          children: [
            '',
            '1-2 一句话中的网络国家',
            '1-3 一张图中的网络国家',
            '1-4 一千字中的网络国家',
            '1-5 一篇文章中的网络国家',
          ]   
        }
      ],        
      '/Ch-2/': [
        {
          title: '作为轨迹的历史',
          collapsable: false,
          children: [
            '',
            '2-2 微观历史和宏观历史',
            '2-3 政治权利和技术真理',
            '2-4 上帝、国家、网络',
            '2-5 上帝的子民，国家的子民，网络的子民',
            '2-6 如果新闻是假的，想象一下历史',
            '2-7 碎片化、边界、第四次转折、未来是我们的过去',
            '2-8 左派是新右派，右派是新左派',
            '2-9 一条诫命',
          ]   
        }
      ],
      '/Ch-3/': [
        {
          title: '三极时刻',
          collapsable: false,
          children: [
            '',
            '3-2 过时的和永恒的',
            '3-3 两极的美国和三极的三角地带',
            '3-4 道德力量、军事力量、金钱力量',
            '3-5 臣服、同情、主权',
            '3-6 冲突与联盟',
          ]   
        }
      ],
      '/Ch-4/': [
        {
          title: '去中心化、重中心化',
          collapsable: false,
          children: [
            '',
            '4-2 社会政治轴线',
            '4-3 技术经济轴线',
            '4-4 可预见的未来',
            '4-5 美国式无政府、中国式控制、国际中间态',
            '4-6 胜利条件与意外结局',
            '4-7 通往重中心化的中心',
          ]   
        }
      ],
      '/Ch-5/': [
        {
          title: '从民族国家到网络国家',
          collapsable: false,
          children: [
            '',
            '5-2 关于民族国家',
            '5-3 关于网络国家',
          ]   
        }
      ],
      '/Ch-6/': [
        {
          title: '附录',
          collapsable: false,
          children: [
            '',
            '6-2 关于 1729',
            '6-3 脚注',
          ]   
        }
      ],        
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-3RP62BH87G'
      }
    ]
  ]
}
