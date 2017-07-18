import mongoose from 'mongoose';
import { mongo } from '../../config.json';

mongoose.Promise = Promise;

mongoose.connect(`mongodb://${mongo.username}:${mongo.password}@${mongo.db}`);

export default mongoose;
