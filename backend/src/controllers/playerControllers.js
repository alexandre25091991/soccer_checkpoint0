const models = require("../models");

const browse = (req, res) => {
  models.player
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const read = (req, res) => {
  models.player
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const player = req.body;
  player.id = parseInt(req.params.id, 10);

  models.player
    .update(player)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  try {
    const player = req.body;
    const [result] = await models.player.insert(player);
    res.json({ playerId: result.insertId });
  } catch (err) {
    if (err.sqlState === "23000") {
      res.status(500).send("Cet IMEI est déjà enregistré");
    } else if (err.sqlState === "HY000") {
      res.status(500).send("IMEI doit faire 15 chiffres !");
    } else {
      res.status(500).send("Error saving the phone");
    }
  }
};

const destroy = (req, res) => {
  const playerId = req.params.id;

  models.player
    .handleDelete(playerId)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
