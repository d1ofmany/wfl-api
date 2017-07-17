import path from 'path';
import express from 'express';
var middleware = require('swagger-express-middleware');

// routes
import routes from './routes';

const app = express();

middleware(path.join(__dirname, 'wfl.yaml'), app, (err, middleware) => {
    app.use(
        middleware.metadata(),
        middleware.CORS(),
        middleware.files(),
        middleware.parseRequest(),
        middleware.validateRequest(),
        //middleware.mock()
    );

    routes(app);

    app.listen(3000, () => {
        console.log('Server is listening!');
    });
});


