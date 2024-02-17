const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shares: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isResponse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      responsePostId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
}
