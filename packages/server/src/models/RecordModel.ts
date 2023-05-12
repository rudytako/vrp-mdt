import {model, Schema} from 'mongoose';

const RecordSchema = new Schema({
    addedBy: String,
    addedAt: Date,
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Civilian'
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    type: Number, //0 - Wypadek, 1 - Wykroczenie, 2 - Przestępstwo
    description: String,
});

export default model('Record', RecordSchema);