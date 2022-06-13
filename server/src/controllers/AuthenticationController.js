module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            switch (error.details[0].context.key) {
                case 'username':
                    res.status(400).send({
                        error: 'This username is already taken.'
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error: 'This email already has an account. Perhaps you meant to log in?'
                    })
            }
            // email already exists in database
        }
    }
}