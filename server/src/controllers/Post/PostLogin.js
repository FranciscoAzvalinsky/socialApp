const { User } = require ('../../db')

const PostLogin = async (req, res) => {
    let user = req.body;

    try {
        let emailFound = await User.findOne({where: {email: user.email}})
        if (emailFound) {
            if (emailFound.password === user.password) {
                res.status(200).send({message: 'Login successful.', user: emailFound})
            }
            else {
                res.status(203).send({message: 'Wrong password. Try again.'})
            }
        }
        else {
            res.status(202).send({message: 'Wrong email. Try again.'})
        }

    } catch (error) {
        console.log(error.stack);
        res.status(500).send({message: 'Error: ' + error.message})
    }
}

module.exports = { PostLogin }