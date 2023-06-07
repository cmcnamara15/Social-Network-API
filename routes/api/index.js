const router = require('express').Router();
const userRoutes = require('./userRoutes');
// thoughtRoutes

router.use('/users', userRoutes);


module.exports = router;