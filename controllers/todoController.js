var models = require('../models'); // loads index.js
var myTodo = models.todos;

const readTodo = async(req, res) => {
  try {
    const response = await myTodo.findAll();
    // console.log(myTodo)
    res.status(200).json(response);
    console.log("succes akses ke tabel")
  } 
  catch (error) {
    console.log(error.message);
  }
}

const createTodo = async(req, res) => {
  try {
    await myTodo.create(req.body);
    res.status(201).json({message:"menambahkan Item"});
  } catch (error) {
    console.log(error.message)
  }  
}


const getTodoByID = async(req, res) => {
  try {
      const response = await myTodo.findOne({
          where:{
              id: req.params.id
          }
      });
      res.status(200).json(response)
      console.log("succes dapatkan id")
  } catch (error) {
      console.log(error.message)
  }
}


const updateTodo = async(req,res) => {
  try {
    await myTodo.update(req.body,{
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({message:" Item updated"});
  } catch (error) {
      console.log(error.message)
  }
  }

const deleteTodo= async(req, res) => {
  try {
      await myTodo.destroy({
          where:{
              id:req.params.id
          }
      });
      res.status(200).json({message:" Item deleted"});
  } catch (error) {
      console.log(error.message)
  }
}

const deleteAllTodo= async(req,res) =>{
  try {
    await myTodo.destroy({
      where: {},
      truncate: true
    })
    res.status(200).json({message:" all todo deleted"});
  } catch (error) {
      console.log(error.message)
  }
}

// function updateTodo(req,res) {
    
// }

// function deleteTodo(req,res) {
    
// }

module.exports={
    readTodo,
    createTodo,
    getTodoByID,
    updateTodo,
    deleteTodo,
    deleteAllTodo
};
