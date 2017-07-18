'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _swaggerExpressMiddleware = require('swagger-express-middleware');

var _swaggerExpressMiddleware2 = _interopRequireDefault(_swaggerExpressMiddleware);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// routes


app.use(_bodyParser2.default.json());

(0, _swaggerExpressMiddleware2.default)(_path2.default.join(__dirname, 'wfl.yaml'), app, function (err, middleware) {
    if (err) {
        console.log(err);
    }

    app.use(middleware.metadata(), middleware.CORS(), middleware.files(), middleware.parseRequest(), middleware.validateRequest()
    //middleware.mock()
    );

    (0, _routes2.default)(app);

    app.listen(process.env.PORT, function () {
        console.log('Server is listening on port ' + process.env.PORT + '!');
    });
});
//# sourceMappingURL=app.js.map