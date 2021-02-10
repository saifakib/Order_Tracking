const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.signUpPostController = async (req, res, next) => {
    const { name, email, password, type } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);

        let user = new User({
            type,
            name,
            email,
            password: hashPassword
        })

        await user.save()
            .then(savedUser => {
                res.status(201).json(savedUser)
            })
            .catch(err => {
                res.status(400).json({ err })
            })
    } catch(e) {
        res.status(404).json({
            error: e
        })
    }
}


exports.loginPostController = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.json({
                message: 'Invalid Credential'
            })
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.json({
                message: 'Invalid Credential'
            })
        } else {
            res.status(200).json({
                message: 'User Login',
                user: user
            })
        }
    }
    catch (e) {
        next(e);
    }
};