import Task from "../models/Task";
import mongoose from "mongoose";

export const create = (req, res, next) => {
  if (req.body.list_id && req.body.name) {
    Task.create({
      list_id: new mongoose.Types.ObjectId(req.body.list_id),
      name: req.body.name,
      description: req.body.desc,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the List.",
        });
      });
  } else {
    res.status(400).send({
      message: "Board Id and Board name is required to create a list",
    });
  }
};
