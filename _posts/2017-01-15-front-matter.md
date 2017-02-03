---
date: 2017-01-15
title: Front matter
video_id: -Rf5V_2E2CA
description: Use front matter to set variables on your page
categories:
  - account-settings
resources:
  - name: "Front matter documentation"
    link: https://jekyllrb.com/docs/frontmatter/
  - name: "Source code"
    link: https://github.com/CloudCannon/bakery-store/tree/frontmatter
type: Video
set: getting-started
set_order: 3
---
Front matter is used to set variables and metadata on pages in your Jekyll site. Let's get straight into an example to demonstrate why this is useful.

We'll start with some basic HTML structure in `about.html`:

{% raw %}
~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>About</title>
  </head>
  <body>
    <h1>About page</h1>
  </body>
</html>
~~~
{% endraw %}

![Starting about page](/img/casts/front-matter/starting-about.png)

Now we'll set a variable in front matter, then output it on our page. Front matter lives between two triple dashed lines `---` at the top of the file. In between these lines we can write YAML to set variables.

Let's set a variable called `hello_text` and give it a value of "Hello there!". `about.html` now looks like this:

{% raw %}
~~~html
---
hello_text: "Hello there!"
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>About</title>
  </head>
  <body>
    <h1>About page</h1>
  </body>
</html>
~~~
{% endraw %}

To output front matter variables, Jekyll uses a language called [Liquid](https://shopify.github.io/liquid/). We'll cover Liquid in later videos, for now you need to know two basic tags:

* You can output variables by surrounding them in two curly braces e.g. {% raw %}`{{ variable }}`{% endraw %}
* You can perform logic statements by surrounding them in a curly brace, percentage sign e.g. {% raw %}`{% if statement %}`{% endraw %}

We can access variables set in front matter using `page.name_of_variable`. So let's add `p` straight after the `h1` and output `hello_text`.

{% raw %}
~~~html
---
hello_text: "Hello there!"
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>About</title>
  </head>
  <body>
    <h1>About page</h1>
    <p>{{ page.hello_text }}</p>
  </body>
</html>
~~~
{% endraw %}

![Output about page](/img/casts/front-matter/output-about.png)

We can use front matter to show/hide sections of a page. In this example we'll add a `show_footer` variable to the front matter which when set to true, will add a footer to the page.

{% raw %}
~~~html
---
hello_text: "Hello there!"
show_footer: true
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>About</title>
  </head>
  <body>
    <h1>About page</h1>
    <p>{{ page.hello_text }}</p>

    {% if page.show_footer %}
      <footer>I am a footer</footer>
    {% endif %}
  </body>
</html>
~~~
{% endraw %}

![Footer about page](/img/casts/front-matter/footer-about.png)

Changing `show_footer` to false will remove the footer.

Arrays are also possible in front matter. We'll create a new array called fruit, each item is indented with two spaces then starts with a hyphen. Then we'll iterate over the items on our page and output them as an unordered list.

{% raw %}
~~~html
---
hello_text: "Hello there!"
show_footer: false
fruit:
  - apple
  - banana
  - orange
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>About</title>
  </head>
  <body>
    <h1>About page</h1>
    <p>{{ page.hello_text }}</p>

    <ul>
      {% for item in page.fruit %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>

    {% if page.show_footer %}
      <footer>I am a footer</footer>
    {% endif %}
  </body>
</html>
~~~
{% endraw %}

![Object about page](/img/casts/front-matter/array.png)


In this last example we'll use objects in front matter. Objects allow for more complex data structures, we're going to use it in our fruits array so we're not only setting the name of the fruit, but also the cost and color. Instead of array items being strings we want them to be keys and values. When we're outputting the fruit, item is now an entire object so we need to reference the keys inside the object.

{% raw %}
~~~html
---
hello_text: "Hello there!"
show_footer: false
fruit:
  - name: apple
    cost: $1
    color: red
  - name: banana
    cost: $2
    color: yellow
  - name: orange
    cost: $1.50
    color: orange
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>About</title>
  </head>
  <body>
    <h1>About page</h1>
    <p>{{ page.hello_text }}</p>

    <ul>
      {% for item in page.fruit %}
        <li>{{ item.name }}, cost: {{ item.cost }}, color: {{ item.color }}</li>
      {% endfor %}
    </ul>

    {% if page.show_footer %}
      <footer>I am a footer</footer>
    {% endif %}
  </body>
</html>
~~~
{% endraw %}

![Object about page](/img/casts/front-matter/object-about.png)

The real power of front matter comes when it's used in combination with layouts and includes which we'll cover in the next tutorials.