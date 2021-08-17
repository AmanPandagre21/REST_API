const express = require("express");
const router = new express.Router();
require("../src/db/conn");
const Apidata = require("../src/models/main");

router.post("/users", async (req, res) => {
  try {
    const user = new Apidata(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/users", async (req, res) => {
  try {
    const result = await Apidata.find();
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Apidata.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Apidata.findByIdAndDelete(_id);
    res.status(200).send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
