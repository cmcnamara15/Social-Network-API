const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
}   = require('../../controllers/thoughtController');


router.route('/').get(getAllThoughts).post(createThought);

// router.get('/', getAllThoughts);
// router.post('/', createThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// router.get('/:id', getThoughtById);
// router.put('/:id', updateThought);
// router.delete('/:id', deleteThought);

module.exports = router;
