var config = require('./knexfile');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = {
  createDbStrucutre: function() {
    knex.schema.createTableIfNotExists('test_schema.users', function(table) {
      table.increments('id');
      table.string('user_name');
      table.string('name');
      table.string('surname');
    }).then()
  },
  knex: knex
}


//knex.migrate.latest([config]);
