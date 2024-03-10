# Kaigi Theme

**Simple, clean Hugo theme designed for events and workshops.**

## Overview

TODO: Add additional documentation.

## Usage

# Options

Available options for `hugo.toml`:

```toml
[params]
  # Social icons in the header
  github = 'YOUR_GITHUB_ID'                 # github.com/YOUR_GITHUB_ID
  instagram = 'YOUR_INSTAGRAM_ID'           # instagram.com/YOUR_INSTAGRAM_ID
  linkedin = 'YOUR_LINKEDIN_ID'             # linkedin.com/in/YOUR_LINKEDIN_ID
  mastodon = 'YOUR_MASTODON_LINK'           # e.g. 'https://mastodon.instance/@xxx'
  rss = true                                # show rss icon

  # giscus
[params.giscus]
  repo = 'YOUR_GISCUS_REPO'                 # see https://giscus.app for more details
  repoId = 'YOUR_GISCUS_REPO_ID'
  category = 'YOUR__GISCUS_CATEGORY'
  categoryId = 'YOUR_GISCUS_CATEGORY_ID'
  mapping = 'pathname'
  theme = 'light'
  lang = 'zh-CN'
```

Available options for front matter:

```toml
comments = false                            # disable comments for a specific page
```

## Attributions

This codebase was forked from the [Hugo Paper Theme](https://github.com/nanxiaobei/hugo-paper) project.

## Licenses

[MIT License](./LICENSE).
