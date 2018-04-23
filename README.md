# READ THIS

There are default examples of both video and document in the repo called **video_default.md** and **document_default.md**


## Features

* Tutorials organised by category
* Two types of tutorials - text and video
* Ability to have a "tutorial series"
* FAQ section
* Disqus comments
* Sticky sidebar for main headings in tutorials
* RSS/Atom feed
* SEO tags
* Google Analytics

## Setup

1. Add your site and author details in `_config.yml`.
2. Add your Google Analytics, Disqus and MailChimp keys to `_config.yml`.
3. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or Jekyll locally).

## Running locally

Once you have this repo checked out, 
1. Download and install Docker
2. Start the server and make changes
    ```
    ./bin/run
    ```

You can view your changes at : `http://localhost:4000` or `http://192.168.99.100:4000` (if you're using docker-machine)

to exit, you can do `ctrl+c`

## Editing

Base is already optimised for adding, updating and removing tutorials, navigation, footer and FAQ information in CloudCannon.

The sticky sidebar in tutorials in populated by pulling out `<h2>` elements from the content.

### Posts

* Add, update or remove a post in the *Posts* collection.
* The tutorials page is organised by categories.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Lets break it down a little more
There are two primary posts types, Document and Video. 

An important part of the orginization of the posts for both documents and videos is the metadata at the top of the file. Breaking down what each field means.

- date: the publishing date, it **will not** show up to the end user, used for SEO

- title: the title showed at the top of the article and when it's listed

- description: Will not be shown to the user, used for SEO


### Example of a category
categoies: *Are ways to organize similar content*

cateogory: Kubernetes

![Category Screenshot](https://dha4w82d62smt.cloudfront.net/items/0k3T1V372L193C0x1y3F/%5Bd2bdba30dd8aee222e7511abd5a338f6%5D_Image%25202018-04-19%2520at%25209.12.47%2520PM.png?X-CloudApp-Visitor-Id=3010088&v=f0daac9e)


### Example of a type
type: *Determins what icon is next to your post (Document or Video)*

![Type Screenshot](https://dha4w82d62smt.cloudfront.net/items/1y0W262h1O1b2o3a0m0c/%5Ba6426540b975b5cec5dbfeab5f60eded%5D_Image%25202018-04-20%2520at%25209.46.12%2520AM.png?X-CloudApp-Visitor-Id=3010088&v=31718d5c)
    

### Example of Resources
Resources: *Only pertains to "Video" posts. These are the links that appear right below the video*

![Resources Screenshot](https://dha4w82d62smt.cloudfront.net/items/3y230Z2W0W1C3l20262Z/%5B31966bf1a3b62fc817d809c2c48402a0%5D_Image%25202018-04-20%2520at%25209.59.31%2520AM.png?X-CloudApp-Visitor-Id=3010088&v=d456f555)


### Post Series
To create a new series:

* Add a new document to the `sets` collection.
* Set the `title` and `description`.

To add a tutorial/post to a series:
* Add a `set` field to the tutorial front matter which points to the file name of the desired set without the `.md` extention. e.g. If I have a set at `_sets/getting-started.md` I would use this in my tutorial front matter: `set: getting-started`.
* Add a `set_order` field to the tutorial front matter and specify a number. This is the tutorials order in the set.

### Navigation

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.
