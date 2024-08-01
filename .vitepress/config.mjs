import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "好きこそ物の上手なれ - A humble Japanese learning site",
  description: "A site where I share my thoughts on learning Japanese.",
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    siteTitle: '「好きこそ物の上手なれ」',

    footer: {
      message: 'Made with tender love and care.',
      copyright: 'Copyright © 2024-present Howard Li'
    }
  }
})
