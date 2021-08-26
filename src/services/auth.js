const bcrypt = require("bcrypt");
const { getUserByEmailService } = require("../api/contents/users/service");
const { createToken } = require("./helpers");

async function login(req, res, next) {
  const { email, password } = req.body;
  const result = await getUserByEmailService(email);

  if(result.data) {
    const isTrue = bcrypt.compareSync(password, result.data.password);

    if(isTrue) {
      const token = createToken(result.data);
      if(token.data) {
        res.status(200);
        res.json({ "error": "", "token": token.data});
      } else {
        res.status(400);
        res.send({
          "error": token.error,
          "message": ""
        });
      }
    } else {
      res.status(400);
      res.send({
        "error": "Wrong Email or Password",
        "message": ""
      });
    }
  } else {
    res.status(400);
    res.send({
      "error": result.error,
      "message": ""
    });
  }
  return;
}

module.exports = {
  login,
  createToken,
}