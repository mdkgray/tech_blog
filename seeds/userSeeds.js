const { User } = require('../models');

const userData = [
    {
        username: 'petey',
        password: 'petepass'
    },
    {
        username: 'sarahB',
        password: 'sezza'
    },
    {
        username: 'RawToast',
        password: 'bread'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;