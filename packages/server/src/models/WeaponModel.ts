import {model, Schema} from 'mongoose';

const WeaponSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Civilian'
    },
    uid: String,
    type: String,
    serial: String,
    model: String,
});

export default model('Weapon', WeaponSchema);
