const { User } = require('../../db');

const bcrypt = require("bcrypt");

const PostUser = async (req, res) => {
    let user = req.body;
    try {
        if (await User.findOne({where: {email: user.email}})){
            res.status(202).send({message: 'Email already registered.'})
        }
        if (await User.findOne({where: {username: user.username}})){
            res.status(203).send({message: 'Username already registered.'})
        }
        if (await User.findOne({where: {phoneNumber: user.phoneNumber}})){
            res.status(205).send({message: 'Phone number already registered.'})
        }
        else {
            
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            await User.create({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                profileName: user.profileName,
                phoneNumber: user.phoneNumber,
                nationality: user.nationality,
                birthDate: user.birthDate,
                email: user.email,
                profilePicture: user.profilePicture,
                password: hashedPassword,
                premium: user.premium
            });
            res.status(200).send({message: 'User created successfully.'})
        }
    } catch (error) {
        res.status(500).send({message: "Error creating user.", error: error.message, stack: error.stack})
    }


}

module.exports = {
    PostUser
}