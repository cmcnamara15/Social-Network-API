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
    reactionBody: {
        type: String,
        required: true,
        trim: true,
        match: /^[\w-]{1,280}$/,
        // minLength: 1,
        // maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(date){
            return date.toLocaleDateString()
        }
    },
},
{
    toJSON: {
        getters: true,
    }
});

module.exports = ReactionSchema;


