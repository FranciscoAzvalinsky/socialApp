const { Like, Post } = require('../../db');

const PostLike = async (req, res) => {
    try {
        let {UserId, PostId} = req.params
        console.log(req.params)
        await Like.create({UserId, PostId})

        let post = await Post.findOne({where: {id: PostId}})
        post.likes++;
        await post.save();
        
        res.status(200).send({message: "Like added successfully"})
    } catch (error) {
        res.status(500).send({message:"Error creating like", error: error.message, stack: error.stack})
    }
}

module.exports = {PostLike}