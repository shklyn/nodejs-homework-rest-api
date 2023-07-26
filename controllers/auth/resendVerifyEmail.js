const { User } = require("../../models");
const { HttpError, sendVerificationEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        throw HttpError(401, "Email not found");
    }
    if(user.verify) {
        throw HttpError(401, "Email already verify");
    }

    console.log('ce ja proviraju chu isnuje "user.verificationCode"', user.verificationCode);

    sendVerificationEmail({ email: email, verificationToken: user.verificationCode });

    res.json({
        message: "Verify email send success"
    })
}

module.exports = resendVerifyEmail;