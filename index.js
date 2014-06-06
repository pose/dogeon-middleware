var DSON = require('dogeon');

module.exports = function () {
  return function (req, res, next) {
    var value;

    if (req.body && req.body.toString) {
      try {
        value = DSON.parse(req.body.toString('utf8'));
      } catch (e) {
        return next(e);
      }
    } else {
      return next();
    }

    req.body = value;
    next();
  };
};
