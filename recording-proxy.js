var http = require('http');
var request = require('request');
var replay = require('replay');
var static = require('node-static');

var API_PATH_PREFIX = '/api';
var API_URL = 'http://myapi.local:9002';

replay.mode = 'record';
replay.headers.push(/^cookie/);

var fileServer = new static.Server('./static', { cache: false });

http.createServer(function(req, res) {
  // Proxy requests for the API
  if (req.url.indexOf(API_PATH_PREFIX) === 0) {
    var apiUrl = A
    req.pipe(request(API_URL + req.url)).pipe(res);

  // Serve static files
  } else {
    req.addListener('end', function () {
      fileServer.serve(req, res);
    }).resume();
  }
}).listen(8000);
