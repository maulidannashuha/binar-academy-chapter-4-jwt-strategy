const { User } = require('../models')

function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken: user.generateToken()
    }
}

module.exports = {
    register: (req, res, next) => {
        // Kita panggil static method register yang sudah kita buat tadi
        User.register(req.body)
            .then(() => {
                res.json({
                    status: 200,
                    message: 'Created successfully'
                })
            })
            .catch(err => next(err))
    },
    login: (req, res, next) => {
        User.authenticate(req.body)
            .then(user => {
                res.json(
                    format(user)
                )
            }).catch(err => res.json({
                status: 403,
                message: err
            }))
    },
    whoami: (req, res) => {
        const currentUser = req.user;
        res.json(currentUser)
    }
}