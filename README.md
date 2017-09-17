# Geek Night Coimbatore

An open forum for geeks to connect, discuss &amp; learn latest ideas, technologies and trends in software development

## Quick Start

From the GitHub page, navigate to `content` folder and create/edit a `yyyy-mm.html` file. See [content/example.html](content/example.html) for possible parameters.

## Development

We're using [nanoc](//nanoc.ws) for static site generation. Jekyll/Octopress are hard-coded for blogging, while Nanoc is much simpler, doesn't take any assumptions and allows to build whatever type of content (not just blogs).

* Make sure you have RVM installed
* Clone this repo
* Run `bundle install`
* Run `nanoc` to compile the website
* Run `nanoc view` to start a server and browse to `localhost:3000`

For ease, there is a Guardfile. You can run `bundle exec guard`, it will keep watching for changes and re-compile the site whenever any file is changed.

## Deployment

Commit changes to master dir (including `/docs` dir) and push

# Folder Structure

* `assets` - contains all assets
* `assets/app.sass` - contains the main stylesheet
* `assets/img/speakers` - contains speaker images
* `content` - content for each geek night
* `layouts` - layouts for default and archive versions
* `Rules` - routing rules
* `docs` - folder containing the generated site

# Front-End Development

* Pure HTML/CSS/Javascript website. No JQuery.
* Used [HTML5 Boilerplate](//html5boilerplate.com) to generate the skeleton.
* Used [colourlovers.com](//colourlovers.com) for the color swatches.
* Using [SASS](//sass-lang.com) and [Foundation](//foundation.zurb.com) for all the Styling.
* Icon fonts were generated and downloaded from [Fontello](//fontello.com). Only icons from the *Modern Pictogram* set were used for consistency.
