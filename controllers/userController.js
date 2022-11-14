const models = require('../models'); // loads index.js
const user = models.users;

const readUser = async(req, res) => {
    try {
      const response = await user.findAll();
      // console.log(myTodo)
      res.status(200).json(response);
      console.log("succes akses ke tabel")
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  
  const createUser = async(req, res) => {
    try {
      await user.create(req.body);
      res.status(201).json({message:"menambahkan Item"});
    } catch (error) {
      console.log(error.message)
    }  
  }

  module.exports={
    readUser,
    createUser
  }
