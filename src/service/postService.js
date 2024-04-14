const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (idUser, title, content, categoryIds) => {
  const newPost = await BlogPost.create({ title, content, userId: idUser });
  await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
    postId: newPost.id,
    categoryId,
  })));
  const result = await BlogPost.findByPk(
    newPost.id,
    { attributes: ['id', 'title', 'content', 'userId', 'updated', 'published'] },
  );
  return { status: 201, data: result };
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] } },
    ],
  });
  return { status: 200, data: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: post };
};

const updatePost = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] } },
    ],
  });
  return { status: 200, data: post };
};

module.exports = { createPost, findAll, findById, updatePost };