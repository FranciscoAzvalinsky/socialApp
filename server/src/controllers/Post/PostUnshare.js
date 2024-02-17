const { Share, Post } = require('../../db');

const PostUnshare = async (req, res) => {
    try {
        let {UserId, PostId} = req.params
        let shareToDelete = await Share.findOne({where: {UserId, PostId}})
        await shareToDelete.destroy();

        let post = await Post.findOne({where: {id: PostId}})
        post.shares--;
        await post.save();
        
        res.status(200).send({message: "Share deleted successfully"})
    } catch (error) {
        res.status(500).send({message:"Error deleting share", error: error.message, stack: error.stack})
    }
}

module.exports = {PostUnshare}