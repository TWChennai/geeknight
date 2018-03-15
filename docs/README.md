# Geek Night Chennai

An open forum for geeks to connect, discuss &amp; learn latest ideas, technologies and trends in software development

# Development

Using [nanoc](//nanoc.ws) for static site generation. Jekyll/Octopress are hard-coded for blogging, while Nanoc is much simpler, doesn't take any assumptions and allows to build whatever type of content (not just blogs).

To start developing,

* Clone this repository
* Forget about whatever present in the root folder
* Worry only about the `generator` folder
* `cd generator` and do `bundle install`. You'll need RVM + Ruby 2.0
* Make changes (see below folder structure). Mostly you'll be dealing with `generator/content`
* Run `nanoc` to compile the website
* Run `nanoc view` to start a server and browse to `localhost:3000`

For ease, there is a Guardfile. You can run `bundle exec guard`, it will keep watching for changes and re-compile the site whenever any file is changed.

# Folders of interest

* `generator` - this is the main source code, rest are all generated source code that can be ignored
* `generator/assets` - contains all assets
* `generator/assets/app.sass` - contains the main stylesheet
* `generator/assets/img/speakers` - contains speaker images
* `generator/content` - content for each geek night
* `generator/layouts` - layouts for default and archive versions
* `generator/Rules` - routing rules

# Front-End Development

* Pure HTML/CSS/Javascript website. No JQuery.