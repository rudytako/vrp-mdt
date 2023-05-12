import {model, Schema} from 'mongoose';

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Civilian'
    },
    uid: String,
    pId: String,
    address: String,
    type: String,
    name: String,
});

PropertySchema.index({'$**': 'text'});

export default model('Property', PropertySchema);