import {model, Schema} from 'mongoose';

export default model('Unit', new Schema({
    name: String
}));