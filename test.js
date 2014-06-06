var DSON = require('dogeon');
var dsonMiddleware = require('./index');
var assert = require('assert');

var req = {body: 'such wow'};

req.body = new Buffer(req.body);

function assertCallback(expected) {
  return function (err) {
    assert.deepEqual(expected, req.body);
  };
}

dsonMiddleware()(req, {}, assertCallback({}));

var obj = {foo: 'bar'};

req.body = new Buffer(DSON.stringify(obj));

dsonMiddleware()(req, {}, assertCallback(obj));

var invalid = new Buffer('wow wow wow wow wow');
req.body = invalid;

dsonMiddleware()(req, {}, assertCallback(invalid));

