const express = require('express');

const postsController = require('../controllers/postsController');

const router = express.Router();

router.get('/', postsController.getAllPosts);

router.post('/', postsController.createPost);

module.exports = router;
