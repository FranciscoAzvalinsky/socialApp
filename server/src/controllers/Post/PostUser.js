const { User } = require('../../db');

const PostUser = async (req, res) => {
    let user = req.body;
    try {
        if (await User.findOne({where: {email: user.email}})){
            res.status(204).send({message: 'User already exists.'})
        }
        else {
            await User.create(user);
            res.status(200).send({message: 'User created successfully.'})
        }
    } catch (error) {
        res.status(500).send({message: "Error creating user.", error: error.message, stack: error.stack})
    }


}

module.exports = {
    PostUser
}