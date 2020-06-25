import Board from "../models/Board";
export const create = (req, res, next) => {
  if (req.body.boardName) {
    Board.create({
      name: req.body.boardName,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Board.",
        });
      });
  } else {
    res.status(400).send({
      message: "Board name is required",
    });
  }
};

export const find = (req, res, next) => {
  Board.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};
