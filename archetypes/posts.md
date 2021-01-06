---
title: "{{ replace .Name "-" " " | title }}" # SEO title and default for H1 tag
h1: "" # optional, overrides `title` for the H1 tag
subtitle: ""
summary: "" # leader for listings
description: "" # seo text, 50-160 characters. Defaults to `summary`.
noindex: false # set to true to hide from Google
date: {{ .Date }}
mainImg: 
    src: ""
    caption: ""
    alt: ""
draft: true
---

