import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "好きこそ物の上手なれ - A humble Japanese learning site",
  description: "A site where I share my thoughts on learning Japanese.",
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ],

    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],

    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],

    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet', rel: 'stylesheet' }
    ]
  ],

  // Set the location of all blog posts and related assets to the 'src' folder .
  srcDir: './src',

  // Set to false to force light mode.
  appearance: true, 

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'About',
        collapsed: false,
        items: [
          { text: 'Intro', link: '/about' }
        ],
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/howard-2718/jouzunare' }
    ],

    siteTitle: '「好きこそ物の上手なれ」',

    footer: {
      message: 'Crafted with tender love and care.',
      copyright: 'Copyright © 2024-present Howard Li'
    }
  }
})
