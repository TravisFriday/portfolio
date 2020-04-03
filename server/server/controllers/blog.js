const Blog = require("../models").Blog;

module.exports = {
  create(req, res) {
    return Blog.create({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image
    })
      .then(blog =>
        res.status(201).send({
          success: true,
          message: "Successfully created an blog entity.",
          blog
        })
      )
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Blog.findAll()
      .then(blogs => res.status(200).send(blogs))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    // Use findAll() with where to use our own specified ID
    /*
          return Blog.findAll({
        where: {
          item_id: req.params.blogId
        }
      })
      */
    return Blog.findByPk(req.params.blogId)
      .then(blog => {
        if (!blog) {
          return res.status(404).send({
            message: "blog Not Found"
          });
        }
        return res.status(200).send(blog);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Blog.findByPk(req.params.blogId)
      .then(blog => {
        if (!blog) {
          return res.status(404).send({
            message: "blog Not Found"
          });
        }
        return blog
          .update(req.body)
          .then(() => res.status(200).send(blog))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Blog.findByPk(req.params.blogId)
      .then(blog => {
        if (!blog) {
          return res.status(400).send({
            message: "blog Not Found"
          });
        }
        return blog
          .destroy()
          .then(() =>
            res.status(204).send({ message: "Successfully deleted the blog!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
