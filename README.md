

mozilla-csv-viewer
==================

This is a port of  Ruffus Pollock's the chrome-cs-viewer ( https://github.com/rgrp/chrome-csv-viewer ).
I port it on FireFox. You can continue development by using The Addon-Sdk, You
can download it From Here  https://developer.mozilla.org/en-US/Add-ons/SDK. Basically this extension
allow you instead of dowloadin a CSV file locally it open new tabs and display your datas into The reclineJs 's
Grid/Map Viewer. You can get more informations about what does reclineJS does by visising the official website
here http://okfnlabs.org/recline/

Building
=======


git clone https://github.com/okfn/mozilla-csv-viewer

Run git submodule commands to get the last version of chrome-csv-viewer
  > git submodule init
  > git submodule update

Install jpm
  > npm install jpm --global
or
  > sudo install jpm --global

Run The extension from Cli (Addon jpm)
  >  jpm run

Package The extension, this mean That we are going to genarte the
The Xpi File

For The Extension Manager
  >  jpm xpi


Install into The Browser
=============================


![Alt text](https://raw.githubusercontent.com/aliounedia/features/master/screen_shot_mozilla_csv_viewer.png "screen_shot")

![Alt text](https://raw.githubusercontent.com/aliounedia/features/master/screen_shot_mozilla_csv_viewer2.png "screen_shot3")

![Alt text](https://raw.githubusercontent.com/aliounedia/features/master/screen_shot_mozilla_csv_viewer3.png "screen_shot2")





Links
=======

You can find interesting things here (like How to handle communication
between `content_scripts` and 'data.url('file.html')'. Or How you can use
The messaging processing between `content_scripts` and 'main.js' file
with `posMessage` and `onMessage` stuffs


https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm

http://blog.mozilla.org/addons/2011/09/01/add-on-sdk-faq-content-script-access/

https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts


contributing
===========

Fork code

Open new Issues

pull request

Wait for review this will take generally some minutes :)


Licence:
========


Copyright & License

Copyright 2014 Alioune Dia . Note that this utilizes various third-party libraries which
may be differently licensed.

Licensed under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
