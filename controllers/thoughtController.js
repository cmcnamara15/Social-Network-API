const { Thought, User } = require('../models');


const getAllThoughts = (req, res) => {
    Thought.find()
    .then(results => {
        res.json(results)
    })
};

const getThoughtById = (req, res) => {
    Thought.findOne({
        _id: req.params.id
    })
    .then(results => {
        res.json(results)
    })
};

const createThought = (req, res) => {
    Thought.create(req.body)
    .then(results => {
        res.json(results)
    })
};

const updateThought = (req, res) => {
    Thought.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true,
        runValidators: true
    })
    .then(results => {
        res.json(results)
    })
};

const deleteThought = (req, res) => {
    Thought.findOneAndDelete({
        _id: req.params.id
    })
    .then(results => {
        res.json(results)
    })
};

const addReaction = (req, res) => {
    Thought.findOneAndUpdate({
        _id: req.params.id
    }, {
        $push: { reactions: req.body }
    }, {
        new: true,
        runValidators: true
    })
    .then(results => {
        res.json(results)
    })
};

const deleteReaction = (req, res) => {
    Thought.findOneAndUpdate({
        _id: req.params.id
    }, {
        $pull: { reactions: { reactionId: req.params.reactionId } }
    }, {
        new: true,
        runValidators: true
    })
    .then(results => {
        res.json(results)
    })
};


module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
}

