const { Like, Post } = require('../../db');

const PostUnlike = async (req, res) => {
    try {
        let {UserId, PostId} = req.params
        let likeToDelete = await Like.findOne({where: {UserId, PostId}})
        await likeToDelete.destroy();

        let post = await Post.findOne({where: {id: PostId}})
        post.likes--;
        await post.save();
        
        res.status(200).send({message: "Like deleted successfully"})
    } catch (error) {
        res.status(500).send({message:"Error deleting like", error: error.message, stack: error.stack})
    }
}

module.exports = {PostUnlike}