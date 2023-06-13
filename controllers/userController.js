const {User} = require('../models');

const getAllUsers = (req, res) => {
    User.find()
    .then(results => {
        console.log(results);
        res.json(results);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error fetching users' });
    });
};


const getUserById = (req, res) => {
    User.findOne({
        _id: req.params.id
    })
    .then(results => {
        res.json(results)
    })
}

const createUser = (req, res) => {
    User.create(req.body)
    .then(results => {
        res.json(results)
    })
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true,
        runValidators: true
    })
    .then(results => {
        res.json(results)
    })
}

const deleteUser = (req, res) => {
    User.findOneAndDelete({
        _id: req.params.id
    })
    .then(results => {
        res.json(results)
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}