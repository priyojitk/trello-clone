import Board from "../models/Board";
export function create(req, res, next) {
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
    throw new Error("Board name is required");
  }
}
