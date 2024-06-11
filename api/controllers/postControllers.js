import Post from '../models/Post.js'

// Get all posts from the database
const getPosts = async (req, res) => {
  const posts = await Post.find()
  res.status(200).json({
    success: true,
    count: posts.length,
    posts,
  })
}

// Get a single posts from the database by its id
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ error: 'Post Not Found' })
    }

    res.status(200).json({
      success: true,
      post,
    })
  } catch (error) {
    res.status(404).json({ success: false, error: 'Post Not Found' })
  }
}

// Save a post to the database
const createPost = async (req, res) => {
  const { title, content } = req.body

  try {
    if (!title && !content) {
      return res.status(500).json({ success: false, error: 'Validation error' })
    }

    const newPost = await Post.create({ title, content })
    await newPost.save()

    res.status(200).json({
      success: true,
      post: newPost,
    })
  } catch (error) {
    res.status(404).json({ success: false, error: 'Validation Error' })
  }
}

// Delete a single posts from the database by its id
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ error: 'Something went wrong' })
    }

    await Post.findByIdAndDelete(req.params.id)

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
    })
  } catch (error) {
    res.status(404).json({ success: false, error: 'Something went wrong' })
  }
}

// Update a single posts from the database by its id
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      updatedPost,
    })
  } catch (error) {
    res.status(404).json({ success: false, error: 'Error occured' })
  }
}

export { getPosts, getPost, createPost, deletePost, updatePost }
