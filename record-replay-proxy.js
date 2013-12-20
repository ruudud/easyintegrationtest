var http = require('http');
var request = require('request');
var replay = require('replay');
var static = require('node-static');

var API_PATH = '/api';
var API_URL = 'http://api.github.com';
var WEBAPP_DIR = './static';
var PORT = process.env.PORT || 8000;

// Can also be set via the REPLAY env
//replay.mode = 'record';
replay.headers.push(/^cookie/);

var fileServer = new static.Server(WEBAPP_DIR, { cache: false });

http.createServer(function(req, res) {
  // If the `replay` module cannot find fixture, return to be able to continue.
  var errFn = function () { res.writeHead(500).end(); };

  // Proxy requests for the API
  if (req.url.indexOf(API_PATH) === 0) {
    if (replay.mode !== 'replay') {
      console.log('Proxying %s request to %s with headers', req.method, req.url);
      console.log('With headers:\n %s', JSON.stringify(req.headers, null, 2));
    }

    req.pipe(request(API_URL + req.url)).on('error', errFn).pipe(res);

  // Serve static files
  } else {
    req.addListener('end', function () {
      fileServer.serve(req, res);
    }).resume();
  }
}).listen(PORT);
