const express = require('express');
const router = express.Router();

//controllers
const { PostPost } = require('../controllers/Post/PostPost')
const { PostUser } = require('../controllers/Post/PostUser');
const { PostLike } = require('../controllers/Post/PostLike');
const { PostUnlike } = require('../controllers/Post/PostUnlike');
const { PostShare } = require('../controllers/Post/PostShare');
const { PostUnshare } = require('../controllers/Post/PostUnshare');
const { PostLogin } = require('../controllers/Post/PostLogin');
const { GetProfile } = require('../controllers/Get/GetProfile');

//rutas

//get
router.get('/profile', GetProfile)

//post
router.post('/post', PostPost)
router.post('/user', PostUser)
router.post('/like/:UserId/:PostId', PostLike)
router.post('/unlike/:UserId/:PostId', PostUnlike)
router.post('/share/:UserId/:PostId', PostShare)
router.post('/unshare/:UserId/:PostId', PostUnshare)
router.post('/login', PostLogin)

module.exports = router