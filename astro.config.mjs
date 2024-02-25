import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tomarney.com',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
});