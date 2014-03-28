# Geek Night Chennai

An open forum for geeks to connect, discuss &amp; learn latest ideas, technologies and trends in software development

# Quick Start

##### IGNORE ANYTHING IN THE ROOT FOLDER, THEY ARE AUTOMATICALLY GENERATED
##### THE REAL SOURCE IS INSIDE `generator` FOLDER

* Clone this repository
* `cd generator` and do `bundle install`. You'll need RVM + Ruby 2.0
* Go to `generator/content`, you will see `.yml` files for each event page.
* Edit `index.yml`, change the date, change some of the content (speakers), etc. For a complete example, see the first `jul2013.yml`
* Run `bundle exec nanoc` to compile the website
* Run `bundle exec nanoc view` to start a server and browse to `localhost:3000`
* If you're going to keep on making changes, run `bundle exec guard` in one terminal (it will continously recompile), and then run `nanoc view` in another terminal. Now you can keep making changes and refresh the browser to see the latest.

# Changing the UI/Layout

* Each `yml` file is read, sent to a simple Rails-style ERB template, and then generated as a file.
* All templates are inside `layouts` folder.
  * `default.html.erb` is used for the latest event
  * `archive.html.erb` is used for old event pages
* So if you want to change the layout, just edit these templates. For ease, they are split into partials, just like Rails style.

# Folder Structure

* `generator` - this is the main source code, rest are all generated source code that can be ignored
* `generator/assets` - contains all assets
* `generator/assets/app.sass` - contains the main stylesheet
* `generator/assets/img/speakers` - contains speaker images
* `generator/content` - content for each geek night
* `generator/layouts` - layouts for default and archive versions
* `generator/Rules` - routing rules

# Tools

* Pure HTML/CSS/Javascript website. No JQuery.
* Uses [nanoc](//nanoc.ws) for static site generation. Jekyll/Octopress are hard-coded for blogging, while Nanoc is much simpler, doesn't take any assumptions and allows to build whatever type of content (not just blogs)
* Used [HTML5 Boilerplate](//html5boilerplate.com) to generate the skeleton.
* Used [colourlovers.com](//colourlovers.com) for the color swatches.
* Using [SASS](//sass-lang.com) and [Foundation](//foundation.zurb.com) for all the Styling.
* Icon fonts were generated and downloaded from [Fontello](//fontello.com). Only icons from the *Modern Pictogram* set were used for consistency.
