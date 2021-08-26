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
    return {"error": null, "data": token};
  } catch (error) {
    console.error(error.message);
    return {"error":error.message, "data": null};
  }
}

module.exports = {
  createToken,
}