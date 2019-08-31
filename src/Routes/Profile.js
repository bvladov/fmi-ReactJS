const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    },
})
const upload = multer({ storage })


router.get("/:id", (req, res) => {
  console.log("finding profile");
  const id = req.params.id;
  User.findById(id).then(user => {
    res.json(user);
  });
});

router.post("/edit/:id",upload.single('photo'), (req, res) => {
  //console.log("finding profile");
  const id = req.body.userid;
  console.log(req.body.descr);
  User.findById(id).then(user => {
    if(!user)
    res.status(400).send("user not found");
    else{
      user.photo = req.file.originalname;
      user.descr = req.body.descr;
      console.log(user.descr);
      user.save().then(user =>{ res.status(201).json(user)})
      .catch( err => { res.status(400).send("Unable to update")});
    }
  });

});

module.exports = router;
