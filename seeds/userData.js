const { User } = require('../models');

const userData = [
    {
        username: 'Tester',
        password: 'password123',
    },
];

const seedComment = () => User.bulkCreate(userData);

module.exports = seedComment;
