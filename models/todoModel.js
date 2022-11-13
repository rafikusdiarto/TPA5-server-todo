// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('todo', {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     item:{
//       type:DataTypes.STRING,
//       allowNull: false
//     },
//     deskripsi: {
//         type: DataTypes.STRING
//     },
//   }, {
//     tableName: 'todos',
//     timestamps: false,
//     schema: 'db_todo'
//   });
// }
module.exports = (sequelize, DataTypes) => {

  const Todo = sequelize.define("todos", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
   },
      item: {
          type: DataTypes.STRING,
          allowNull: true
      },
      deskripsi: {
          type: DataTypes.STRING
      },
  },{
    tableName: 'todos'
 })
  return Todo
}