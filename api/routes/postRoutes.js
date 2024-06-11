import express from 'express'
import {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from '../controllers/postControllers.js'
const router = express.Router()

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getPost).delete(deletePost).put(updatePost)

export default router
