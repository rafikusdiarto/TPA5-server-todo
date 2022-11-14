const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/all-user', userController.readUser)
router.post('/all-user',userController.createUser)

module.exports = router;