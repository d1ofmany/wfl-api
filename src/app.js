import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import middleware from 'swagger-express-middleware';

// routes
import routes from './routes';

const app = express();

app.use(bodyParser.json());

middleware(path.join(__dirname, 'wfl.yaml'), app, (err, middleware) => {
    if (err) {
        console.log(err);    
    }
    
    app.use(
        middleware.metadata(),
        middleware.CORS(),
        middleware.files(),
        middleware.parseRequest(),
        middleware.validateRequest()
        //middleware.mock()
    );

    routes(app);

    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}!`);
    });
});


