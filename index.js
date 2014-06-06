var DSON = require('dogeon');

module.exports = function () {
  return function (req, res, next) {
    var value;

    try {
      value = DSON.parse(req.body);
    } catch (e) {
      return next(e);
    }

    req.body = value;
    next();
  };
};
