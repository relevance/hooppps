# Hooppps
  
## DESCRIPTION

Hooppps is a mobile-friendly [dribbble](http://dribbble.com) browser. Why? Well, we love dribbble and we all have iPhones, Androids, and other smart-phones, but dribbble does not have a mobile stylesheet. When the dribbble API came out, some iPhone apps hit the app store but that didn't service everybody and they cost money for a limited version of dribbble. We just wanted to browse shots and players!

Hooppps is built on Rails 3 and uses the [Swish](http://github.com/jeremyw/swish) gem to use the dribbble API. 

## Features

* Popular Shot landing page (lists shots and some data about the shot)
* Link to shot page
* Tweet Shot (needs improvement)
* List comments and link to players' pages
* Link to player page (lists player's shots and player and data about player/shots)
* Follow player on twitter
* Go to Player (via top nav)
* Serves Mobile layout and Browser layout that simulates the mobile experience (hover and scroll on the app screen)

## USAGE

Good news: hooppps is free. Use it! :)


## Contribute

This is a first pass. We would love your suggestions and/or contributions. Send a pull request, fork the project, send design comps... whatever you feel compelled to do. The code is all here so you can do whatever you like with it! 

**Current contributor list:**

* [Michael Parenteau](http://twitter.com/parenteau) *- Original concept &amp; design*
* [Jon Distad](http://twitter.com/jondistad)
* [Alex Redington](http://twitter.com/holy_chao)
* [Larry Karnowski](http://twitter.com/karnowski)
* [Shay Frendt](http://twitter.com/shayfrendt)
* [Muness Alrubaie](http://twitter.com/muness)


## TODO & KNOWN ISSUES

* More views other than the "popular shots" stream. (eg: everyone / debuts shots)
* Behavioral details? (note: don't bog the project down with making views huge and giant plugins)
* Stay on top of API changes / additions

## Run project in dev mode

1. Make sure you have ruby-1.8.7-p302 &amp; Rails 3 installed
2. Install Bundler: `gem install bundler`
3. Run: `bundle install`
4. Start rails server: `rails s`
5. In browser go to http://localhost:3000/ 
6. On phone on wifi use http://your-ip-address:3000
7. Play &amp; Enjoy!

## Misc. URLS

* Follow Hooppps on twitter [http://twitter.com/hooppps](http://twitter.com/hooppps)
* Dribbble is righteous! [http://dribbble.com](http://dribbble.com)
* Relevance, Inc. [http://thinkrelevance.com](http://thinkrelevance.com)

== LICENSE

(The MIT License)

Copyright (c) 2010 Relevance, Inc. - http://thinkrelevance.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
 
 
 
