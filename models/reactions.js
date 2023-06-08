const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> {
            return new Types.ObjectId()
        }
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
})


