const { User } = require ('../../db')

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { serialize } = require("cookie");
const { SECRETKEY } = require("../../config.js");

const PostLogin = async (req, res) => {
    let user = req.body;

    try {
        let emailFound = await User.findOne({where: {email: user.email}})
        if (emailFound) {

            const passwordMatch = await bcrypt.compare(user.password, emailFound.password);
            if (passwordMatch) {
                const token = jwt.sign(
                    {
                        id: emailFound.id,
                        email: emailFound.email,
                        firstName: emailFound.firstName,
                        lastName: emailFound.lastName,
                        profileName: emailFound.profileName,
                        username: emailFound.username,
                        profilePicture: emailFound.profilePicture,
                        premium: emailFound.premium,
                        phoneNumber: emailFound.phoneNumber,
                        nationality: emailFound.nationality
                    },
                SECRETKEY,
                { expiresIn: "4h" }
                );

            const cookieOptions = {
                httpOnly: true,
                maxAge: 3600000,
            };
            const tokenCookie = serialize("token", token, cookieOptions);

            res.setHeader("Set-Cookie", tokenCookie);

            res.status(200).send({ message: "Inicio de sesión exitoso", user: token });
            } else {
            console.error("Contraseña incorrecta");
            res.status(203).send({ message: "Contraseña incorrecta" });
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