'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = Promise;

var connectDB = 'mongodb://localhost/wfl';

if (process.env.MONGO_URI) {
    connectDB = process.env.MONGO_URI;
} else {
    var config = require('../../config.json');
    connectDB = 'mongodb://' + config.mongo.username + ':' + config.mongo.password + '@' + config.mongo.db;
}

_mongoose2.default.connect(connectDB);

exports.default = _mongoose2.default;
//# sourceMappingURL=connect.js.map