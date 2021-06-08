const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'There once was a number that couldn\'t increment beyond it\'s ceiling, so it became an alphabet.',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'This comment has been consumed.',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'The presence of anonymity makes power dangerous',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'There once was a variable that failed to assign itself to an alphabet, so it became a word.',
        user_id: 1,
        post_id: 2,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
