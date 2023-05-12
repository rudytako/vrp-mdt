import {model, Schema} from 'mongoose';

const CivilianSchema = new Schema({
    cId: Number,
    name: String,
    vehicles: [{
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }],
    properties: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }],
    weapons: [{
        type: Schema.Types.ObjectId,
        ref: 'Weapon'
    }],
    dob: Date,
    sex: Number, //0 - Kobieta, 1 - Mężczyzna
    unpaidInvoices: Number,
    additionalInfo: {
        height: Number,
        weight: Number,
        eyeColor: String
    },
    records: [{
        type: Schema.Types.ObjectId,
        ref: 'Record'
    }],
    licenses: [{
        type: String,
        enum: ['DRIVER', 'CCW', 'GREEN_CARD'],
        default: []
    }]
});

CivilianSchema.index({ name: "text" });

export default model('Civilian', CivilianSchema);