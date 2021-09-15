const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// Add other required routes here

router.use('/users', userRoutes);
// Add corresponding routes to router.use here

module.exports = router;