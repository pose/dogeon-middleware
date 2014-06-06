var DSON = require('dogeon');

function toString(stream, cb) {
  var result = '';
  stream.on('data', function (data) {
    result += data.toString('utf8');
  });

  stream.on('error', function (err) {
    cb(err, null);
  });

  stream.on('end', function () {
    cb(null, result);
  });
}

module.exports = function () {
  return function (req, res, next) {
    var value;

    if (req.body) {
      toString(req.body, function (err, data) {
        if (err) { return next(err); }

        try {
          value = DSON.parse(data);
        } catch (e) {
          return next(e);
        }
        req.body = value;
        next();
      });
      return;
    }

    next();
  };
};

