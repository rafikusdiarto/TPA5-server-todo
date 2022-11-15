const { verifyRegister } = require("../middleware");
const controller = require("../controllers/authController");
const express = require("express");
const app = require('../app');

var router =  require('express').Router(); {
    router.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    
    router.post("/signup",[verifyRegister.checkDuplicateUsernameOrEmail],controller.signup);
    router.post("/signin", controller.signin);

};

module.exports= router;