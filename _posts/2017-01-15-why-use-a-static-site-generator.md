---
date: 2017-01-15
title: Why use a static site generator?
video_id: FOfIoCi9uTI
description: Introduction to the world of static site generators
type: Video
category:
  - Getting Started
set: getting-started
set_order: 6
---
We're looking at what ​static site generators are and how they're different from dynamic content management systems like WordPress.  

### What is a static site generator?

A static site generator takes source files and generates an entirely static website.

![Static Overview](/img/casts/what-is-a-static-site-generator/static-overview.png)

There are many static site generators available built for all sorts of purposes. [Some](https://github.com/Jack000/Expose) are for creating photo gallery websites from a bunch of photos, [others](https://www.gitbook.com/) help you create documentation websites. The majority help you manage a typical website with a blog.  

![static site generator Options](/img/casts/what-is-a-static-site-generator/options.png)

In this tutorial series we're using [Jekyll](http://jekyllrb.com). Jekyll is actively maintained and has the largest community of all the static site generators.

To understand how static site generators are different, let's have a look at how a dynamic CMS such as [WordPress](https://wordpress.org/) works.

### How does a dynamic CMS work?

In this article we're using WordPress as the dynamic CMS but we could easily swap this out for Drupal or the majority of other CMSs out there.

When a user goes to a page on a WordPress site, the request is sent to our web server ([Nginx](https://www.nginx.com/)) then forwarded to WordPress. WordPress builds the page from a number of templates, gets the content and other site data from the database and sends the complete HTML page back to the user.

![How does a dynamic CMS work?](/img/casts/what-is-a-static-site-generator/dynamic-cms-overview.png)

### How does a static site generator work?

When we're setting up our server, we take the static site created by static site generator and deploy it to our server. When a user requests a page on our static site, the request is sent to our web server ([Nginx](https://www.nginx.com/)), which then finds the matching file and sends it back to the user.

![How does a static site generator work?](/img/casts/what-is-a-static-site-generator/jekyll-overview.png)


### Why use a static site generator?

Now that we understand the fundamental differences between static site generators and dynamic CMSs, let's have a look at why we'd actually use one.

#### Less Complexity

Jekyll sites are basically static sites with an extra templating language called [Liquid](https://shopify.github.io/liquid/) so it's a small step to learn if you already know HTML, CSS and JavaScript. We can actually just start with a static site and then introduce Jekyll functionality as it's needed.

![Building Jekyll](/img/casts/what-is-a-static-site-generator/building-jekyll.png)

When we're setting up a static server, all we need is a web server that's capable of serving static files.

![Jekyll Simplicity](/img/casts/what-is-a-static-site-generator/jekyll-overview.png)

On the other hand to build WordPress themes, in addition to HTML, CSS and JavaScript, we need to understand PHP, MySQL and the WordPress API.

![Building WordPress](/img/casts/what-is-a-static-site-generator/building-wordpress.png)

To set up a WordPress server we need to setup our web server, PHP and MySQL. Then we'll copy over our WordPress plugins, database and files from our development environment.

![WordPress Simplicity](/img/casts/what-is-a-static-site-generator/dynamic-cms-overview.png)

#### Speed

Serving a static site is extremely fast because all the web server needs to do is return a file. We can also make sure the site is perfectly optimized before we deploy it. We do this by running all the source code through minifiers, optimizing the images, using tools to remove unused CSS and other techniques.

![Jekyll Speed](/img/casts/what-is-a-static-site-generator/jekyll-overview.png)

On every request WordPress needs to build the whole page from scratch. This involves putting together all the template files and getting any content or other data from the database.

![WordPress Speed](/img/casts/what-is-a-static-site-generator/dynamic-cms-overview.png)

This is made worse if we're using WordPress plugins. Each plugin will most likely need data from the database and time to process.

![WordPress Speed Plugins](/img/casts/what-is-a-static-site-generator/wordpress-plugins.png)

A lot of this processing can be eliminated by using a cache which means when a page is processed, it will save a copy for future requests. However this adds extra complexity and another point of failure.

We can also perform some optimizations like minification to speed up the site but these are usually done on-the-fly.

#### Security

There are only static files and a web server on our server, there's nothing dynamic that can be exploited. It's still possible to access the server if a hacker can find a vulnerability in the web server but the risk is greatly reduced.

![Jekyll Security](/img/casts/what-is-a-static-site-generator/jekyll-overview.png)

Hackers often look for out of date WordPress sites where there are known exploits. So the main way to keep WordPress secure is making sure it's kept up to date. The database is also a potential point of access if it's misconfigured. There are security plugins available which help prevent common misconfigurations.

![WordPress Security](/img/casts/what-is-a-static-site-generator/dynamic-cms-overview.png)

Every WordPress plugin we install is a potential access point for a hacker. Access was gained in the [Panama Papers incident](https://en.wikipedia.org/wiki/Panama_Papers) by exploiting an out of date slider plugin.

![WordPress Speed Plugins](/img/casts/what-is-a-static-site-generator/wordpress-plugins.png)

#### Scalability

A single server can handle [a lot](http://www.speedemy.com/apache-vs-nginx-2015/) of traffic if it's just serving static files. However, if we need more resources (or redundancy) we can load balance traffic across multiple servers. This is relatively easy to set up as we just need to make sure the static site is on all our servers.

![Static Site Scale](/img/casts/what-is-a-static-site-generator/static-scale.png)

To scale WordPress we can deploy our WordPress environment to multiple servers and have our database instance on a single separate server. At some point we'll need to have multiple database servers as well which adds another layer of complexity.

![WordPress Site Scale](/img/casts/what-is-a-static-site-generator/wordpress-scale.png)

#### Version Control

All the source code for our Jekyll site can live in a version control system like [Git](https://git-scm.com/). With Git we can go back to any single version of the site in its entire history. This also serves as an offsite backup, if we ever need to restore a server all the files we need are in the Git repository.

We can create branches which allow us to work on multiple versions of the site and merge them together later. This is extremely useful when we have a large team of developers as they can work simultaneously. It also means they can clone the production environment on their local machine with minimal effort.

If we take this a step further we can even have our source code in an open source repository on [GitHub](https://github.com) and have anyone make updates and suggest merging it into our live site.

![Version Control](/img/casts/what-is-a-static-site-generator/version-control.png)

In WordPress we have the ability to revert changes on an individual blog post. We need to ensure we're backing up the database regularly and keeping track of the themes, plugins and  assets we've uploaded.

![Version Control](/img/casts/what-is-a-static-site-generator/wordpress-version.png)

### Conclusion

If you're interesting in trying out Jekyll you're in the right place! [Jekyll Casts](/) takes you through everything you need to know from installing Jekyll, to advanced use cases.

We look forward to seeing you again soon!