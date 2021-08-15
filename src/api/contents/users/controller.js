const User = require("./model");
const Ranking = require("../ranking/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createToken } = require("../../../services/auth");


async function getUser(req, res) {
  try {
    const user = await User.findByPk(req.decoded.id, { raw: true, include: Ranking, nest: true });
    delete user["password"];
    res.status(200);
    res.json({
      "error": "",
      "message": user
    });
  } catch (error) {
    console.error("User Controller getUser Error: ", error);
    res.status(500);
    res.send({
      "error": "try again later!",
      "message": ""
    });
  }
};

async function createUser(req, res) {
  try {
    const create  = await User.create(req.body);
    const createRanking  = await Ranking.create({user_id: create.dataValues.id, score: 0});
    const response = createToken(create.dataValues);
    res.status(201);
    res.json({"message": "user created", "error": "", "token": response});

  } catch (error) {
    console.error(error.message);
    res.status(400);
    res.send({"error": error.message});
  }
};

async function updateUser(req, res) {
  try {
    const user = await User.update(req.body, {where: {id: req.decoded.id}});
    console.log(user);
    if(user[0]) {
      res.status(200);
      res.json({
        "message": "user updated",
        "error": ""
      });
    } else {
      res.status(400);
      res.json({
        "message": "",
        "error": "wrong field"
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400);
    res.json({
      "message": "",
      "error": error.message
    });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({where: { id: req.decoded.id }});
    console.log(user);
    if(user) {
      res.status(200);
      res.json({"message": "user deleted", "error":""});
    } else {
      res.status(400);
      res.json({
        "message": "",
        "error": "user has already been removed",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      "message": "",
      "error": error.message
    });
  }
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}