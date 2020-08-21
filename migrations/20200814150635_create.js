
exports.up = function(knex) {
    return knex.schema.createTable('users', (t) => {
        t.autoincrements();

        t.string('username');

        t.string('email');

        t.string('password');

        t.timestamps();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
  
};
