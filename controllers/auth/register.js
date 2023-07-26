const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { HttpError, sendVerificationEmail } = require("../../helpers");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const register = async(req, res)=> {
    const {email, password, subscription} = req.body;
    const user = await User.findOne({email});

    if(user){
        throw HttpError(409, "Email already in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email);
    const verificationCode = nanoid();

    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationCode });

    sendVerificationEmail({ email: email, verificationToken: verificationCode });
    

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
        subscription: newUser.subscription,
    })
}

module.exports = register;