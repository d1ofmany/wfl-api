'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../../config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = Promise;

_mongoose2.default.connect('mongodb://' + _config.mongo.username + ':' + _config.mongo.password + '@' + _config.mongo.db);

exports.default = _mongoose2.default;
//# sourceMappingURL=connect.js.map