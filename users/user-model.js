const db = require("../data/config.js");
const bcrypt = require('bcryptjs');


module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username", "department", "password").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)

  const [id] = await db("users").insert(user)
  return findById(id)
}


function findById(id) {
  return db("users").where({ id }).first();
}
