const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);


router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

// router.post('/', createUser);

// router.get('/:id', getUserById);

// router.put('/:id', updateUser);

// router.delete('/:id', deleteUser);


module.exports = router;