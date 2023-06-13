const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

// router.get('/:id', getUserById);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// router.post('/', createUser);

// router.put('/:id', updateUser);

// router.delete('/:id', deleteUser);


module.exports = router;