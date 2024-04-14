const { BlogPost, PostCategory } = require('../models');

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

const finAll = async () => {
  const posts = await BlogPost.findAll();
  return { status: 200, data: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id);
  if (!post) return { status: 404, message: 'Post does not exist' };
  return { status: 200, data: post };
};

module.exports = {
  createPost,
  finAll,
  findById,
};