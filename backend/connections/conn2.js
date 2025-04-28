const pg = require('pg');
require('dotenv').config();
const db = new pg.Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB,
    host: process.env.PG_HOST
})
const connect = async () => {
    try {
        await db.connect().then(() => console.log("Connected to POSTGRES DB "));
    } catch (err) {
        console.log("Unable to connect to postgres db ", err);
    }
}

connect();