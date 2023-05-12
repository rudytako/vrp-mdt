import {model, Schema} from 'mongoose';

const VehicleSchema = new Schema({
    model: String,
    plate: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Civilian'
    },
    color: String,
    uid: String,
    lockedPrice: Number,
    lockedBy: {
        name: String,
        uid: String
    },
    records: [{
        type: Schema.Types.ObjectId,
        ref: 'Record'
    }],
});

VehicleSchema.index({'$**': 'text'});

export default model('Vehicle', VehicleSchema);