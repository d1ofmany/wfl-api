const defaultRoute = (app) => {
    app.get('/', (req, res) => {
        res.send('WFL api!');
    });
}

export default defaultRoute;
