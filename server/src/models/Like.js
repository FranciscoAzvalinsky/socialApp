const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    "Like",
    {
        PostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
      timestamps: false,
    }
  );
}