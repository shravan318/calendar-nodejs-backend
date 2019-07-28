// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
const user = require('./user')
const marks = require('./marks')
// Set default API response
router.use('/user',user)
router.use('/marks', marks)

// Export API routes
module.exports = router;