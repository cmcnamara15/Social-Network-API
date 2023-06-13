const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(updateUser);

// router.get('/:id', getUserById);

// router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


module.exports = router;