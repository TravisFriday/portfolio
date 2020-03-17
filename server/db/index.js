const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "travisf", //"travisf",
    password: "postgres", //"postgres",
    database: "tfportfolio"
  }
});

module.exports = knex;
