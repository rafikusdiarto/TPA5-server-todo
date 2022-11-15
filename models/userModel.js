module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
   },
      username: {
          type: DataTypes.STRING,
          allowNull: true
      },
      password: {
          type: DataTypes.STRING
      },
  },)
  return User
}