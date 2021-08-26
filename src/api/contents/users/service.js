const User = require("./model");

async function getUserByPkService(pk) {
  try {
    const user = await User.findByPk(pk, { raw: true });
    delete user["password"];
    return {"error": null, "data": user};
  } catch (error) {
    console.error("<<<<<<<<<<<<  ERROR ON GET USER BY PK  >>>>>>>>>>>>", error.message);
    return {"error": error.message, "data": null};
  }
}

async function getUserByEmailService(email) {
  try {
    const user = await User.findOne({ where: { email } });
    if(user) {
      return {"error": null, "data": user.toJSON()}
    } else {
      return {"error": "Wrong email or password", "data": null}
    }
  } catch (error) {
    console.error("<<<<<<<<<<<<  ERROR ON GET USER BY EMAIL  >>>>>>>>>>>>", error.message);
    return {"error": error.message, "data": null};
  }
}

async function createUserService(data) {
  try {

    const user  = await User.create(data);
    return {"error": null, "data": user.dataValues}

  } catch (error) {

    console.error("<<<<<<<<<<<<  ERROR ON CRATE USER  >>>>>>>>>>>>",error.message);
    return {"error": error.message, data: null};

  }
}

async function updateUserService(data, id) {
  try {
    const user = await User.update(data, { where: { id } });
    if(user[0]) {
      return {"error": null, "data": user[0]};
    } else {
      return {"error": "Wrong field", "data": null};
    }
  } catch (error) {
    console.error("<<<<<<<<<<<<  ERROR ON UPDATE USER  >>>>>>>>>>>>",error.message);
    return {"error": error.message, data: null};
  }
}

async function deleteUserService(id) {
  try {
    const user = await User.destroy({ where: { id } });
    if(user) {
      return {"error": null, "data": user};
    } else {
      return {"error": "user has already been removed", data: null};
    }
  } catch (error) {
    console.error("<<<<<<<<<<<<  ERROR ON DELETE USER  >>>>>>>>>>>>",error.message);
    return {"error": error.message, data: null};
  }
}
module.exports = {
  getUserByPkService,
  getUserByEmailService,
  createUserService,
  updateUserService,
  deleteUserService,
}