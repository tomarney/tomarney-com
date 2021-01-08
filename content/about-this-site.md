---
title: "About this site"
summary: "Interested in how I built this website?"
description: "The personal website of Tom Arney. Built using Hugo and hosted on Netlify, with a custom theme."
date: 2020-11-21T19:15:20+00:00
draft: false
---

This is a static website built with [Hugo](https://gohugo.io) and hosted on [Netlify](https://www.netlify.com/). This is my own hand-made theme, but I'm very grateful for the headstart on directory structure from [Niklas Fasching](https://github.com/niklasfasching)'s bare minimum [Whitespace](https://github.com/niklasfasching/whitespace) theme.

I'm also indebted to Matthew Butterick's [Practical Typography](https://practicaltypography.com/) for inspiration in the design of the website, though I'm sure he'd question some of my choices (largely a result of limited time).

If you have any comments or spot any bugs, please [let me know](/contact).

## Techy details

[Hugo](https://gohugo.io) is a static site generator written in [Go](https://golang.org/), and compiles incredibly quickly. It took me a little while to get my head around how it does things, and particularly its nomenclature (archetypes vs layouts vs taxonomies vs shortcodes, etc.) but it’s been well worth the investment. The thing that gave me the biggest leg-up was [Nancy McGough](https://www.ii.com/)’s [Hugo Tutorial](https://www.ii.com/themeless-gitless-intro-hugo/). What that made Hugo *most* interesting to me is that it’s just one binary to install. No dependencies, cross-platform, no toolchain to get muddled up in. Sass compilation, minification, live reload, all out of the box. What a dream.

What Hugo does for easing development woes, [Netlify](https://www.netlify.com/) does for dev ops: I barely have to think in order to release a new version of the site – I just push to my master branch (or merge a PR) on [GitHub](https://github.com/tomarney/tomarney-com) and Netlify starts a deployment. Near-instant, atomic deployments with very easy rollback, and a generous free tier. CDN included. And because this is a (pre-compiled) static site, there’s no security worries involving out-of-date plugins and insecure admin logins.

For analytics, though only a nice-to-have, I wanted to steer well clear of Google Analytics with all the privacy concerns and cookie consent banners. After a good deal of searching I found [GoatCounter](https://www.goatcounter.com/), which is open-source, hosted, free for non-commercial use, and only uses anonymous data.  
{{<a href="/privacy" class="point-right-out">}}More about the analytics{{</a>}}
