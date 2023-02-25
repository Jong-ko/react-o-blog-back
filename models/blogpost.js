"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class blogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      blogPost.belongsTo(models.user, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  blogPost.init(
    {
      title: DataTypes.STRING,
      blog: DataTypes.STRING,
      catagory: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "blogPost",
    }
  );
  return blogPost;
};
