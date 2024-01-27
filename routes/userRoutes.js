const express = require('express');
const router = express.Router();
const {validationMiddleware,checkUserExists} = require('../middleware/validationMiddleware');
const userController = require('../controllers/userController');

//auth
// Register
router.post('/register',[ validationMiddleware], userController.register );

// Login
router.post('/login', [ validationMiddleware ], userController.login );

// CRUD 
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', [ checkUserExists ], userController.updateUser);
router.delete('/:id', [checkUserExists], userController.deleteUser);

module.exports = router;




