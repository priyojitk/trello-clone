import List from "../models/List";
import mongoose from "mongoose";

export const create = (req, res, next) => {
  if (req.body.board_id && req.body.name) {
    List.create({
      board_id: new mongoose.mongo.ObjectId(req.body.board_id),
      name: req.body.name,
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
