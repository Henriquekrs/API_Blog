const { postService } = require('../service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await postService.createPost(id, title, content, categoryIds);
  return res.status(status).json(data);
};

module.exports = {
  createPost,
};