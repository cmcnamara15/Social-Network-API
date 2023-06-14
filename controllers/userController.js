const {User} = require('../models');
const { use } = require('../routes');

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
        console.log(results);
        res.json(results)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error fetching user' });
    });
}

const createUser = (req, res) => {
    User.create(req.body)
    .then(results => {
        console.log(results);
        res.json(results)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error creating user' });
    });
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true,
        runValidators: true
    })
    .then(results => {
        console.log(results);
        res.json(results)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error updating user' });
    });
}

const deleteUser = (req, res) => {
    User.findOneAndDelete({
        _id: req.params.id
    })
    .then(results => {
        console.log(results);
        res.json(results)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error deleting user' });
    });
}

const addFriend = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        {$push: {friends: req.params.friendId}},
        {new: true}
    )
    .then(results => {
        console.log(results);
        res.json(results)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error adding friend' });
    });
}

const deleteFriend = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        {$pull: {friends: req.params.friendId}},
        {new: true}
    )
    .then(results => {
        console.log(results);
        res.json(results)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error deleting friend' });
    });
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
}