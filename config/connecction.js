const {User} = require('../models');

const getAllUsers = (req, res) => {
    User.find()
    .then(results => {
        res.json(results)
    })
}

const getUserById = (req, res) => {
    User.findOne({
        _id: req.params.id
    })
    .then(results => {
        res.json(results)
    })
}

module.exports = {
    getAllUsers,
    getUserById
}