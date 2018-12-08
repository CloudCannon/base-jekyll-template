# FydeOS FAQ & Knowledge base

## What is this
**FydeOS FAQ & Knowledge base** - as the name suggests, it's the repository for FAQ and recipes for FydeOS and its related ecosystem. It's powered by [Jekyll](https://jekyllrb.com/), the static website engine behind Github pages. We decided to host it on Github pages so that you can contribute to perfect this repository and help others to better utilise FydeOS.


## Changelog
#### 2018-12-08
Updated URL schemes for the Knowledge base section:
 - We are now using SEO friendly (and much shorter) human-readable plain English words as opposed to the longer article title which gets converted to [Punycode](https://en.wikipedia.org/wiki/Punycode).
 - A redirect mechanism is in place for backward compatibility, previous URLs to all exisiting kb articles should still work, but on your browser it should be shwon as the updated shorter/friendlier URL.
 - You will need to specify the SEO URL yourself when creating new Knowledge base articles by specifying `permalink:` in the front matter section, see below or exisiting kb articles for reference.
 - It's also good to include a redirect to have previous `/:categories/:title` URL scheme (that may include Chinese character) also working, by specifying one or more `redirect_from:` in the front matter section, see below or exisiting kb articles for reference.


## How can I contribute

### Setup

1. Checkout this repository:
```bash
$ git checkout git@github.com:FydeOS/fydeos.github.io.git
```

2. Install ruby on your OS if you have not already had it. Refer to [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/) for more details.

3. cd into your working copy and prep for the Jekyll and its deps:
```bash
$ cd your/dir/to/fydeos.github.io
~/your/dir/to/fydeos.github.io $ gem install bundler jekyll
~/your/dir/to/fydeos.github.io $ bundle exec jekyll serve --incremental
```

Now you should have **FydeOS FAQ & Knowledge base** showing up on your browser at [http://127.0.0.1:4000](http://127.0.0.1:4000)


### Creating new content
1. FAQ items
 - Locate the directory named `_faq` in your working copy.
 - Within `_faq` you shall find numerous of `*.md` files, each file corresponds to one piece of FAQ item.
 - To create a new question, simply create a new `*.md` file within this directory, with the **name of your question** being the filename. e.g. `如何使用OTA升级我的FydeOS？.md`.
 - Edit this Markdown file you've just created, with content being the answer to the question. Note that the **first two lines of triple dashes** need to be preserved on each file, e.g.

```
---
---
Your answer here
```
 - Save your file, you should be able to find your item on the FAQ page.

2. Knowledge base item
 - Locate the directory named `_post` in your working copy.
 - Within `_post` you shall find numerous of `*.md` files, each file corresponds to one piece of knowledge base recipe/tutorial item in the **FydeOS FAQ & Knowledge base** site.
 - To create a new question, simply create a new `*.md` file within this directory, with the pattern of `<YYYY-MM-DD->-<title_of_your_tutorial>.md` being the filename, e.g. `2018-07-24-如何在FydeOS上安装使用Crostini.md`.
 - Edit this Markdown file you've just created, with content being the tutorial that you would like to share. Note that the **first two lines of triple dashes** need to be preserved and you should include some metadata to your tutorial in the following format, e.g.

```
---
date: <YYYY-MM-DD>
title: <title to your tutorial, same as the latter part of the filename of this file>
categories:
- <category name of your choice>
type: Document
permalink: /<category_name>/<SEO_friendly_title>/
redirect_from:
  - /<早期中文category>/<早期中文标题>/
---
Your tutorial content here
```
 - Save your file, you should be able to find your item on the Knowledge bsae page.
 - When in doubt, you can always refer to existing tutorial files for reference.

### Contributing to the live site
You shall create a pull request along with your additions to this repository, upon reviewing we will go-live your contribution asap.


## Some other notes
 - The official language for contributing new contents is currently `zh_CN`, we will be making `EN` soon when we are ready to serve markets other than PR China.
 - This Jekyll template originates from `Base`, which was made by [CloudCannon](http://cloudcannon.com/), the Cloud CMS for Jekyll.