const { Router } = require("express");
const router = Router();
const User = require("./model");
const Ranking = require("../ranking/model");
const validateToken = require('../middleware/authToken');
const { getUser, createUser, updateUser, deleteUser } = require("./controller");
const { login } = require("../../../services/auth");

router.get('/', validateToken, getUser);
router.post('/', createUser);
router.put('/', validateToken, updateUser);
router.delete('/', validateToken, deleteUser);

router.post('/login', login);

module.exports = router;