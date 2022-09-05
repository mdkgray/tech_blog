const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

// GET route for all posts
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: { user_id: req.session.user_id },
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: Comment, 
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User, 
                    attributes: ['username']
                }
            }, 
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, logged_in: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET route for edit post page 
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: { id: req.params.id }, 
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: User, 
                attributes: ['username']
            },
            {
                model: Comment, 
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User, 
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this Id' });
            return;
        }

        const post = dbPostData.get({ plain: true });
        res.render('edit-post', { post, logged_in: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET route for new post page
router.get('/new', (req, res) => {
    res.render('new-post', { logged_in: true });
});

module.exports = router;
