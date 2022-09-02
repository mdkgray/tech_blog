const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

// GET route to find all comments
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET route to find comment with a specific id
router.get('/:id', (req, res) => {
    Comment.findAll({
        where: { id: req.params.id }
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST route to create a new comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

// PUT route to update a comment with a specific id
router.put('/:id', withAuth, (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text
    },
    {
        where: { id: req.params.id }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this Id' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE route to delete a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: { id: req.params.id }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            response.status(404).json({ message: 'No comment found with this Id' });
            return;
        }
        res.json(dbCommentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;