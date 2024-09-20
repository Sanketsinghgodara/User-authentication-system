const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middlewares/AuthMiddleware');
const router = require('express').Router();

// Define the routes
router.post('/', userVerification); // This is the user verification route
router.post('/signup', Signup); // This is the signup route
router.post('/login', Login); // This is the login route

module.exports = router;
