import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title'],
    },
    content: {
      type: String,
      required: [true, 'Please enter post content'],
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('Post', PostSchema)
export default Post
