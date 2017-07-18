import mongoose from 'mongoose';

mongoose.Promise = Promise;

let connectDB = 'mongodb://localhost/wfl'

if (process.env.MONGO_URI) {
    connectDB = process.env.MONGO_URI;
} else {
    const config = require('../../config.json');
    connectDB = `mongodb://${config.mongo.username}:${config.mongo.password}@${config.mongo.db}`;
}

mongoose.connect(connectDB);

export default mongoose;
