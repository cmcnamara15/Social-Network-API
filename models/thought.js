const { Schema, model } = require('mongoose');
const ReactionSchema = require('./reactions');

const ThoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    thoughtText: {
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
    reactions: [
        ReactionSchema
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    }
});
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});

const Thought = model("thought", ThoughtSchema);
module.exports = Thought;