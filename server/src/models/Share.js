const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    "Share",
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