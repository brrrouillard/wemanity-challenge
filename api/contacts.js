const router = require("express").Router();

const Contact = require("../models/Contact");

// Get all users
router.get("/", (req, res) => {
  Contact.find((err, contacts) => {
    if (err) console.log(err);
    res.status(200).send(contacts);
  });
});

module.exports = router;
