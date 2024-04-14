module.exports = (sequelize, DataTypes) => {
  const blogPostsModel = sequelize.define('BlogPost', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });

  blogPostsModel.associate = (models) => {
    blogPostsModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user'});
  };
  return blogPostsModel;
};