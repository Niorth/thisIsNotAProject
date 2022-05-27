const Pool = require("pg").Pool

const pool = new Pool({
    user: "Hugo",
    password: "admin",
    database: "thisIsNotAProjectDB",
    host: "localhost",
    port: "5432"
})

module.exports = pool
