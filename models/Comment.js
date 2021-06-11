const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Extending the Model prototype to the Comment class
class Comment extends Model { }

// Initializing the Comment class
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,      
            validate: {
                len: [1],
              },
        },
        // Adding user_id to link the comment to the user
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        // Adding post_id to link the comment to the post
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
