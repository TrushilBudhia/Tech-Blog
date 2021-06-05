const { Post } = require('../models');

const postData = [
    {
        title: 'Node.js',
        content: `Node.js, as an asynchronous event-driven JavaScript runtime, it is designed to build scalable network applications. Users of Node.js are free from worries of dead-locking the process, since there are no locks.`,
        //user_id: 1,
    },
    {
        title: 'Express.js',
        content: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
        //user_id: 1,
    },
    {
        title: 'bcyrpt',
        content: `A library to help you hash passwords.`,
        //user_id: 1,
    },
    {
        title: 'Sequelize',
        content: `Sequelize is a promise-based Node.js ORM for MySQL. It features solid transaction support, relations, eager and lazy loading, read replication and more.`,
        //user_id: 1,
    },
    {
        title: 'Connect Session Sequelize',
        content: `A SQL session store using Sequelize.js`,
        //user_id: 1,
    },
    {
        title: 'Express Handlebars',
        content: `A Handlebars view engine for Express. This view engine uses sensible defaults that leverage the "Express-way" of structuring an app's views.
        
        The main layout is the HTML page wrapper which can be reused for the different views of the app. A placeholder is used for where the main content should be rendered  with specific content.`,
        //user_id: 1,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
