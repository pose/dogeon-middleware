var DSON = require('dogeon');
var dsonMiddleware = require('./index');
var assert = require('assert');

var req = {body: 'such wow'};

function assertCallback(expected) {
  return function (err) {
    assert.deepEqual(expected, req.body);
  };
}

dsonMiddleware()(req, {}, assertCallback({}));

var obj = {foo: 'bar'};

req.body = DSON.stringify(obj);

dsonMiddleware()(req, {}, assertCallback(obj));

var invalid = 'wow wow wow wow wow';
req.body = invalid;

dsonMiddleware()(req, {}, assertCallback(invalid));

