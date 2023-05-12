import { model, Schema } from "mongoose";

const schema = new Schema({
    characters: [{type: Schema.Types.ObjectId}],
    password: String,
    permissions: [String],
    salt: String,
    email: String
})

export default model('Account', schema)