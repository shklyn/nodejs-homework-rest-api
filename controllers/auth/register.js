const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { HttpError } = require("../../helpers");
const gravatar = require("gravatar");


const register = async(req, res)=> {
    const {email, password, subscription} = req.body;
    const user = await User.findOne({email});

    if(user){
        throw HttpError(409, "Email already in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email);

    const newUser = await User.create({...req.body, password: hashPassword, avatarURL});

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
        subscription: newUser.subscription,
    })
}

module.exports = register;