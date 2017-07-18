'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('../db/connect');

var _Meal = require('../db/Meal');

var _Meal2 = _interopRequireDefault(_Meal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealRoute = function mealRoute(app) {
    app.get('/meals', function (req, res) {
        _Meal2.default.find({}, function (err, data) {
            if (err) {
                console.log(err);
            }

            res.json(data);
        });
    });
    app.post('/meal', function (req, res) {
        var meal = new _Meal2.default({ name: req.body.name });

        meal.save(function (err, data) {
            if (err) {
                console.log(err);
            }

            res.json(data);
        });
    });
    app.get('/meal/:id', function (req, res) {
        _Meal2.default.findById(req.params.id, function (err, data) {
            if (err) {
                console.log(err);
            }

            res.json(data);
        });
    });
    app.post('/meal/:id', function (req, res) {
        _Meal2.default.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name } }, { new: true }, function (err, data) {
            if (err) {
                console.log(err);
            }

            res.json(data);
        });
    });
    app.delete('/meal/:id', function (req, res) {
        _Meal2.default.findById(req.params.id, function (err, data) {
            if (err) {
                console.log(err);
            }
            if (data) {
                data.remove();
                res.json({ "removed": true });
            } else {
                res.json({ "removed": false });
            }
        });
    });
};

exports.default = mealRoute;
//# sourceMappingURL=meal.js.map