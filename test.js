var DSON = require('dogeon');
var dsonMiddleware = require('./index');
var assert = require('assert');
var Stream = require('stream');

var req = {body: 'such wow'};

req.body = new Stream(req.body);

function assertCallback(expected) {
  return function (err) {
    assert.deepEqual(expected, req.body);
  };
}

dsonMiddleware()(req, {}, assertCallback({}));

var obj = {foo: 'bar'};

req.body = new Stream(DSON.stringify(obj));

dsonMiddleware()(req, {}, assertCallback(obj));

var invalid = new Stream('wow wow wow wow wow');
req.body = invalid;

dsonMiddleware()(req, {}, assertCallback(invalid));

