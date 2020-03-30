"use strict";
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    "Blog",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      image: DataTypes.TEXT
    },
    {}
  );
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};
