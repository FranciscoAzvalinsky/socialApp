const { Post } = require('../../db');

const PostPost = async (req, res) => {
    let {
        content,
        UserId,
        isResponse,
        responsePostId,
    } = req.body;
    try {
        if (content){
            await Post.create({content, likes: 0, shares: 0, UserId, isResponse, responsePostId});
            res.status(200).send({message: 'Post created successfully.'})
        }
        else {
            res.status(204).send({message: 'Post empty. Unable to create post.'})
        }
    } catch (error) {
        console.log(error.stack);
        res.status(500).send({message: "Error creating post.", error: error.message, stack: error.stack})
    }
}

module.exports = {
    PostPost
}