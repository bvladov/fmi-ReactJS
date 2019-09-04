const express = require("express");
const router = express.Router();
const Thread = require("../Schemas/Thread");

router.post("/:subcategory", (req, res) => {
  const newThread = Thread({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    subcategory: req.body.subcategory
  });

  newThread
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

router.get("/:subcategory", (req, res) => {
  Thread.find().then(data => {
    let threads = [];
    data.map(c =>
      threads.push({
        id: c.id,
        title: c.title,
        author: c.author,
        subcategory: c.subcategory
      })
    );
    res.json(threads);
  });
});

router.get("/search/:title", (req, res) => {
  Thread.find({ title : req.params.title }).then(data => {
    let threads = [];
    data.map(c =>
      threads.push({
        id: c.id,
        title: c.title
      })
    );
    res.json(threads);
  });
});
module.exports = router;
