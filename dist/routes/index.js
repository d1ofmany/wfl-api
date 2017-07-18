'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _meal = require('./meal');

var _meal2 = _interopRequireDefault(_meal);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(app) {
    (0, _meal2.default)(app);

    (0, _default2.default)(app);
};

exports.default = routes;
//# sourceMappingURL=index.js.map