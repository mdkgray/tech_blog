const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        title: 'Javascript: The best programming language to learn',
        content: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.'
    },
    {
        user_id: 2,
        title: 'Sequelize',
        content: 'Sequelize is a promise-based, Node.js ORM (Object-relational mapping) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.'
    },
    {
        user_id: 3,
        title: 'Handlebars....templates made easy',
        content: 'Handlebars.js is a Javascript library used to create reusable webpage templates. The templates are combination of HTML, text, and expressions. The expressions are included in the html document and surrounded by double curly braces.'
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;