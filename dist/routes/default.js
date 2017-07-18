'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaultRoute = function defaultRoute(app) {
    app.get('/', function (req, res) {
        res.send('WFL api!');
    });
};

exports.default = defaultRoute;
//# sourceMappingURL=default.js.map