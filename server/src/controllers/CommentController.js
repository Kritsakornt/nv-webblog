const {Comment} = require('../models')

module.exports = {
    // get all blog
    async index (req, res) {
        try {
            const comments = await Comment.findAll()
            res.send(comments)
        } catch (err) {
            res.status(500).send({
                error: 'The comments information was incorrect'
            })
        }
    },

    // create blog
    async create (req, res) {
        // res.send(JSON.stringify(req.body))
        try {
            const comment = await Comment.create(req.body)
            res.send(comment.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create comment incorrect'
            })
        }
    },

    // edit blog, suspend, active
    async put (req, res) {
        try {
            await Comment.update(req.body, {
                where: {
                    id: req.params.commentId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update comment incorrect'
            })
        }
    },

    //delete blog
    async remove (req, res) {
        try {
            const comment = await Comment.findOne({
                where: {
                    id: req.params.commentId
                }
            })

            if(!comment){
                return res.status(403).send({
                    error: 'The comment information was incorrect'
                })
            }

            await comment.destroy()
            res.send(comment)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    },

    // get blog by id
    async show (req, res) {
        try {
            const comment = await Comment.findById(req.params.commentId)
            res.send(comment)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    }
}