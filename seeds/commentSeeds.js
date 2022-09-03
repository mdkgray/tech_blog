const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: 'Javascript helped me turn my portfolio from a static HTML page to a dynamic page where users can click and navigate.'
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: 'I found sequelize really intuitive to use. I was able to easily display large sets of data needed for a university project.'        
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: 'I struggled at first with handlebars but after looking through their documentation I was able to create nice page templates.'
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;