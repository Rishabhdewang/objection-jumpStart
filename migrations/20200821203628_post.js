
exports.up = function(knex) {
    return knex.schema.createTable('post', (t) => {
        t.increments("id");

        t.string('username');

        t.string('email');

        t.string('password');

        t.timestamps();
    });
  
};

exports.down = function(knex) {
  
};
