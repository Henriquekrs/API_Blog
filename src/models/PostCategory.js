module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true
  });
  PostCategory.associate = (models) => {
    //um post pode ter varias categorias
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories'
    })
    //uma categoria pode estar em varios post
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts'
    })
  }
  return PostCategory;
};