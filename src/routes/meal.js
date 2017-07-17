const mealRoute = (app) => {
    app.get('/meals', (req, res) => {
        res.json([{"name": "Palačinke"}, {"name": "Rizoto"}, {"name": "Kava"}]);
    });
    app.get('/meal/:id', (req, res) => {
        res.json({"name": "Palačinke"});
    });
}

export default mealRoute;