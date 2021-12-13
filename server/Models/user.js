const Model = require("./model");

class User extends Model {
  constructor() {
    super("users");
  }

  // compare(attempted, password, salt) {
  //   return utils.compareHash(attempted, password, salt);
  // }

  create({ name, username, email, password }) {
    //salt here?
    let newUser = {
      name,
      username,
      email,
      password,
    };

    return newUser;
  }
}

module.exports = new User();
