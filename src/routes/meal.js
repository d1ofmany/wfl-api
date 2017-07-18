import '../db/connect';
import Meal from '../db/Meal';

const mealRoute = (app) => {
    app.get('/meals', (req, res) => {
        Meal.find({}, (err, data) => {
            if (err) { console.log(err); }
            
            res.json(data);
        });
    });
    app.post('/meal', (req, res) => {
        var meal = new Meal({ name: req.body.name });

        meal.save(function (err, data) {
            if (err) { console.log(err); }
            
            res.json(data);
        });
    });
    app.get('/meal/:id', (req, res) => {
        Meal.findById(req.params.id, (err, data) => {
            if (err) { console.log(err); }
            
            res.json(data);
        });
    });
    app.post('/meal/:id', (req, res) => {
        Meal.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name } }, { new: true },(err, data) => {
            if (err) { console.log(err); }
            
            res.json(data);
        });
    });
    app.delete('/meal/:id', (req, res) => {
        Meal.findById(req.params.id, (err, data) => {
            if (err) { console.log(err); }
            if (data) {
                data.remove();
                res.json({ "removed": true });
            } else {
                res.json({ "removed": false });
            }
            
        });
    });
}

export default mealRoute;