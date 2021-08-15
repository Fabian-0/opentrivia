const User = require("../api/contents/users/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createToken(data) {
  try {
    const token = jwt.sign({
      id: data.id, 
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email
    }, 
    process.env.JWT_KEY, 
    { expiresIn: "12h", algorithm: "HS512" }
    );
    return token;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await User.findOne({where: {email}, raw: true});
    const isTrue = bcrypt.compareSync(password, result.password);
    if(isTrue) {
      const token = createToken(result);
      res.status(200);
      res.json(token);
    } else {
      res.status(400);
      res.send({
        "error": "Email or Password"
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400);
    res.send({
      "error": "Unexpected error"
    });
    return;
  }
}

module.exports = {
  login,
  createToken,
}