const { Share, Post } = require('../../db');

const PostShare = async (req, res) => {
    try {
        let {UserId, PostId} = req.params
        console.log(req.params)
        await Share.create({UserId, PostId})

        let post = await Post.findOne({where: {id: PostId}})
        post.shares++;
        await post.save();
        
        res.status(200).send({message: "Share added successfully"})
    } catch (error) {
        res.status(500).send({message:"Error creating share", error: error.message, stack: error.stack})
    }
}

module.exports = {PostShare}