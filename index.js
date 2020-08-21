const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());

const Users = require('./model/user');
const { Model } = require("objection");
const knex = require('knex')({
    client : 'pg',
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : '8085',
        database : 'testdb'
    }
});

// passing knex object to objection
Model.knex(knex);

const route = require('./routes/route');
app.use("/api",route);

app.listen(PORT , () => {
    console.log("Listening on port :" + PORT);
})

