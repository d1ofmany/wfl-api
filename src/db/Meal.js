import mongoose from 'mongoose';

const Meal = mongoose.model('meal', { name: String });

export default Meal;
