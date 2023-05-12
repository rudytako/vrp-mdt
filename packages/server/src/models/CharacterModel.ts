import {model, Schema} from 'mongoose';

const CharacterSchema = new Schema({
    name: String,
    groups: [String],
    permissions: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }
});

export default model('Character', CharacterSchema);