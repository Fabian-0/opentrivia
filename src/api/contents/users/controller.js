const { createToken } = require("../../../services/helpers");

const { 
  getUserByPkService, 
  createUserService, 
  updateUserService, 
  deleteUserService 
} = require("./service");

async function getUser(req, res) {
  const user = await getUserByPkService(req.decoded.id);
  console.log(user);
  if(user.data) {
    res.status(200);
    res.json({
      "error": "",
      "message": user.data
    });
  } else {
    res.status(404);
    res.send({
      "error": "try again later!",
      "message": ""
    });
  }
};

async function createUser(req, res) {
  if (req.body?.score) delete req.body.score;

  const create  = await createUserService(req.body);

  if(create.data) {
    const response = createToken(create.data);
    if(response.data) {
      res.status(201);
      res.json({"message": "user created", "error": "", "token": response.data});
    } else {
      res.status(400);
      res.send({"message": "","error": create.error}); 
    }
  } else {
    res.status(400);
    res.send({"message": "","error": create.error}); 
  }
  return;
};

async function updateUser(req, res) {
  if (req.body?.score) delete req.body.score;
  if (req.body?.id) {
    res.status(400);
    res.json({"error": "you can't change the id!", "message": ""});
    return;
  };

  const user = await updateUserService(req.body, req.decoded.id);

  if(user.data) {
    console.log(user);
    res.status(200);
    res.json({
      "message": "user updated",
      "error": ""
    });
  } else {
    res.status(400);
    res.json({
      "message": "",
      "error": user.error
    });
  }
  return;  
}

async function deleteUser(req, res) {
  const user = await deleteUserService(req.decoded.id);
  console.log(user);
  if(user.data) {
    res.status(200);
    res.json({"message": "user deleted", "error":""});
  } else {
    res.status(404);
    res.json({
      "message": "",
      "error": user.error,
    });
  }
  return;
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}