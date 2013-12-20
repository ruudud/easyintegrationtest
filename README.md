Integration Testing Platform
============================

The first time you use this, execute `make install` to install dependencies.
Then you can rerun tests by doing `make test`.

**NOTE**: The default setup uses Docker, which currently is only officially
supported on Ubuntu 12.04 and 13.04. Other platforms also work, check out the 
[installation guidelines](http://www.docker.io/gettingstarted/), and use `make
test` directly.

However, you don't need to use Docker, you can also install dependencies
manually:

 1. Install [NodeJS](http://nodejs.org/)
 2. Install [GruntJS](http://gruntjs.com/): `npm install -g grunt-cli`
 3. (maybe) Install [PhantomJS dependencies](http://phantomjs.org/build.html):
    `libfontconfig1-dev`
 4. Install dependencies (from this dir): `npm install`
 5. Run tests by doing `grunt test`


Todo
----

- ~~Use [dotcloud/docker](https://github.com/dotcloud/docker) to set up test
  platform~~
- [n1k0/casperjs](https://github.com/n1k0/casperjs) sample tests
- ~~Run tests using [gruntjs/grunt](https://github.com/gruntjs/grunt)~~
- ~~Example use of [assaf/node-replay](https://github.com/assaf/node-replay) to
  record and play HTTP requests~~
- Example use of the
  [ebrehault/resurrectio](https://github.com/ebrehault/resurrectio) test
  recorder Chrome extension


License
-------
MIT
