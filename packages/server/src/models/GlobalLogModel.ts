import {model, Schema} from 'mongoose';

const GlobalLogSchema = new Schema({
    type: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: Date, required: true},
    data: {type: Object, required: false},
});

export const GlobalLogModel = model('GlobalLog', GlobalLogSchema);